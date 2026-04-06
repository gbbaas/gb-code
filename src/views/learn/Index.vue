<template>
  <div class="learn-page">
    <!-- 顶部导航 -->
    <header class="top-bar">
      <span class="back" @click="goHome">← 返回</span>
      <span class="title">gb-code</span>
      <span class="login-btn" @click="goLogin">登录</span>
      <span class="menu-btn" @click="showMenu = !showMenu">☰</span>
    </header>

    <div class="main-container">
      <!-- 左侧菜单 -->
      <aside class="sidebar" :class="{ show: showMenu }">
        <div v-for="course in courses" :key="course.id" class="course-menu">
          <div 
            class="course-title" 
            :class="{ active: currentCourse?.id === course.id, expanded: expandedCourses.has(course.id) }"
            @click="toggleCourse(course)"
          >
            <span>{{ course.icon }} {{ course.title }}</span>
            <span class="arrow">{{ expandedCourses.has(course.id) ? '▾' : '▸' }}</span>
          </div>
          
          <div v-show="expandedCourses.has(course.id)" class="chapter-list">
            <div 
              v-for="chapter in course.chapters" 
              :key="chapter.id"
              class="chapter-item"
              :class="{ active: activeChapter?.id === chapter.id && currentCourse?.id === course.id }"
              @click="selectChapter(course, chapter)"
            >
              {{ chapter.title }}
            </div>
          </div>
        </div>
      </aside>

      <!-- 右侧内容 -->
      <main class="content" @click="showMenu = false">
        <template v-if="activeChapter">
          <!-- 章节标题+视频 -->
          <div class="chapter-header">
            <h1>{{ activeChapter.title }}</h1>
            <span v-if="getChapterVideo()" class="chapter-video-btn" @click="playVideo(getChapterVideo()!)">▶ 观看章节</span>
          </div>

          <!-- 知识点列表 -->
          <div v-for="point in getFilteredPoints(activeChapter)" :key="point.id" class="lesson-section">
            <div :id="'lesson-' + point.id" class="lesson-title">
              <span>{{ point.title }}</span>
              <span v-if="getPointVideo(point)" class="lesson-video-btn" @click="playVideo(getPointVideo(point)!)">▶ 观看知识点</span>
            </div>
            
            <!-- Blocks内容流 -->
            <div class="blocks">
              <template v-for="block in point.blocks" :key="block.id">
                <h3 v-if="block.type === 'heading'" :id="'block-' + block.id" class="block-heading">{{ block.content }}</h3>
                <p v-else-if="block.type === 'text'" :id="'block-' + block.id" class="block-text">{{ block.content }}</p>
                <ul v-else-if="block.type === 'list'" :id="'block-' + block.id" class="block-list">
                  <li v-for="(item, i) in block.items" :key="i">{{ item }}</li>
                </ul>
                <div v-else-if="block.type === 'image'" :id="'block-' + block.id" class="block-image">
                  <img :src="block.src" loading="lazy" />
                </div>
                <div v-else-if="block.type === 'video'" :id="'block-' + block.id" class="block-video">
                  <video :src="block.src" controls></video>
                </div>
                <div v-else-if="block.type === 'code'" :id="'block-' + block.id" class="block-code">
                  <div class="code-head">
                    <span class="filename">{{ block.filename || (block.language === 'java' ? 'Main.java' : block.language) }}</span>
                    <div class="copy-box">
                      <span v-if="copiedId === block.id" class="copy-text">已复制</span>
                      <span class="copy-icon" @click="copy(block.code || '', block.id)">
                        <svg v-if="copiedId !== block.id" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                        <svg v-else viewBox="0 0 24 24" width="14" height="14" class="check"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      </span>
                    </div>
                  </div>
                  <pre><code>{{ block.code }}</code></pre>
                </div>
                <div v-else-if="block.type === 'table'" :id="'block-' + block.id" class="block-table">
                  <table>
                    <thead><tr><th v-for="h in block.headers" :key="h">{{ h }}</th></tr></thead>
                    <tbody><tr v-for="(row, i) in block.rows" :key="i"><td v-for="(cell, j) in row" :key="j">{{ cell }}</td></tr></tbody>
                  </table>
                </div>
                <div v-else-if="block.type === 'tip'" :id="'block-' + block.id" class="block-tip">💡 {{ block.content }}</div>
                <div v-else-if="block.type === 'warning'" :id="'block-' + block.id" class="block-warning">⚠️ {{ block.content }}</div>
                <blockquote v-else-if="block.type === 'quote'" :id="'block-' + block.id" class="block-quote">{{ block.content }}</blockquote>
                <!-- 流程图 -->
                <div v-else-if="block.type === 'flowchart-if'" :id="'block-' + block.id" class="fc-if">
                  <div class="fc-node decision">{{ block.steps?.[0]?.text }}</div>
                  <div class="fc-if-tree"><span>/</span><span>\</span></div>
                  <div class="fc-if-labels"><span>true</span><span>false</span></div>
                  <div class="fc-if-children">
                    <div class="fc-if-child"><div class="fc-node">{{ block.steps?.[1]?.text }}</div></div>
                    <div class="fc-if-child fc-if-empty"></div>
                  </div>
                </div>
              </template>

              <!-- 多语言代码实现 -->
              <div v-if="hasCodeImpl(point)" class="code-impl-section">
                <div v-if="showLangTabs && getAvailableLangs(point).length > 1" class="code-tabs">
                  <span 
                    v-for="l in getAvailableLangs(point)" 
                    :key="l"
                    class="code-tab"
                    :class="{ active: getActiveCodeLang(point.id) === l }"
                    @click="setActiveCodeLang(point.id, l)"
                  >
                    {{ getLangDisplayName(l) }}
                  </span>
                </div>
                
                <div v-for="codeBlock in getCodeBlocks(point)" :key="codeBlock.id" class="block-code">
                  <div class="code-head">
                    <span class="filename">{{ codeBlock.filename }}</span>
                    <div class="copy-box">
                      <span v-if="copiedId === codeBlock.id" class="copy-text">已复制</span>
                      <span class="copy-icon" @click="copy(getCodeContent(codeBlock), codeBlock.id)">
                        <svg v-if="copiedId !== codeBlock.id" viewBox="0 0 24 24" width="14" height="14"><path fill="currentColor" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
                        <svg v-else viewBox="0 0 24 24" width="14" height="14" class="check"><path fill="currentColor" d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>
                      </span>
                    </div>
                  </div>
                  <pre><code>{{ getCodeContent(codeBlock) }}</code></pre>
                </div>
              </div>
            </div>
          </div>
        </template>
        
        <div v-else class="empty">请从左侧选择章节</div>
      </main>

      <!-- 右侧悬浮导航 -->
      <aside v-if="activeChapter" class="quick-nav">
        <div v-for="point in getFilteredPoints(activeChapter)" :key="point.id" class="nav-group">
          <div class="nav-item" @click="scrollToElement('lesson-' + point.id)">
            <span class="dot">●</span>{{ point.title }}
          </div>
        </div>
      </aside>
    </div>

    <!-- 视频弹窗 -->
    <div v-if="videoUrl" class="video-modal" @click="videoUrl = ''">
      <video ref="videoPlayer" :src="videoUrl" controls autoplay @click.stop></video>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch, nextTick, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { ProgrammingCourse, ProgrammingChapter, KnowledgePoint, CodeImplKey, CodeBlock, LanguageCourseGroup } from '@/types/course'

const route = useRoute()
const router = useRouter()

// 语言列表
const backendLangs = ['java', 'javascript', 'python', 'go', 'c', 'csharp']
const frontendLangs = ['html', 'vue', 'react', 'android', 'ios', 'harmonyos', 'uniapp', 'miniprogram', 'electron', 'qt', 'ai_vue']

// 加载状态
const loading = ref(true)
const courseGroups = ref<LanguageCourseGroup[]>([])
const currentType = ref<'backend' | 'frontend'>('backend')

// 从 URL query 参数获取语言
const lang = computed(() => route.query.lang as string || '')

// 前端技术栈到后端语言的映射（用于语言基础课程）
const frontendToBackendLang: Record<string, string> = {
  html: 'javascript',
  vue: 'javascript', 
  react: 'javascript',
  uniapp: 'javascript',
  miniprogram: 'javascript',
  electron: 'javascript',
  harmonyos: 'javascript',
  qt: 'javascript',
  android: 'java',
  ios: 'javascript', // iOS暂用js替代
  ai_vue: 'ai' // AI编程Vue映射到ai
}

// 获取映射后的语言（用于语言基础课程）
function getMappedLang(techLang: string): string {
  return frontendToBackendLang[techLang] || techLang
}

// 判断当前类型（backend/frontend）
const courseType = computed(() => currentType.value)

// 按需加载课程数据
async function loadCourses() {
  loading.value = true
  const langVal = lang.value || 'backend'
  
  // 判断前后端并按需加载
  if (langVal === 'frontend' || frontendLangs.includes(langVal)) {
    const { frontendCourseGroups } = await import('@/mock/frontendData')
    courseGroups.value = frontendCourseGroups
    currentType.value = 'frontend'
  } else {
    const { backendCourseGroups } = await import('@/mock/backendData')
    courseGroups.value = backendCourseGroups
    currentType.value = 'backend'
  }
  
  loading.value = false
  init()
}

// 监听 lang 变化，动态加载
watch(lang, loadCourses, { immediate: true })

// 是否显示语言切换tab（lang=backend/frontend 或 不传参数时显示）
const showLangTabs = computed(() => !lang.value || lang.value === 'backend' || lang.value === 'frontend')

// 获取当前语言列表
const allLangs = computed(() => courseType.value === 'backend' ? backendLangs : frontendLangs)

// 默认语言（用于视频和代码显示）
const defaultLang = computed(() => {
  if (lang.value === 'backend') return 'java'
  if (lang.value === 'frontend') return 'vue'
  return lang.value || (courseType.value === 'backend' ? 'java' : 'vue')
})

// 实际过滤用的语言（backend/frontend不过滤）
const filterLang = computed(() => {
  if (lang.value === 'backend' || lang.value === 'frontend') return ''
  return lang.value
})

// 检查知识点是否有当前语言的实现
function hasLangImpl(point: KnowledgePoint): boolean {
  if (!filterLang.value) return true
  if (!point.codeImpl) return true
  // 先查原始语言，再查映射语言
  const directMatch = !!point.codeImpl[filterLang.value as CodeImplKey]
  const mappedMatch = !!point.codeImpl[getMappedLang(filterLang.value) as CodeImplKey]
  return directMatch || mappedMatch
}

// 检查章节是否有当前语言的知识点
function hasChapterLangImpl(chapter: ProgrammingChapter): boolean {
  if (!filterLang.value) return true
  return chapter.points.some(point => hasLangImpl(point))
}

// 过滤后的章节points
function getFilteredPoints(chapter: ProgrammingChapter): KnowledgePoint[] {
  if (!filterLang.value) return chapter.points
  return chapter.points.filter(point => hasLangImpl(point))
}

// 获取课程列表
const courses = computed(() => {
  if (loading.value || courseGroups.value.length === 0) return []
  const allCourses = courseGroups.value[0]?.courses || []
  if (!filterLang.value) return allCourses
  
  return allCourses.map(course => ({
    ...course,
    chapters: course.chapters.filter(chapter => hasChapterLangImpl(chapter))
  })).filter(course => course.chapters.length > 0)
})

const expandedCourses = ref<Set<string>>(new Set())
const currentCourse = ref<ProgrammingCourse | null>(null)
const activeChapter = ref<ProgrammingChapter | null>(null)
const showMenu = ref(false)
const videoUrl = ref('')
const videoPlayer = ref<HTMLVideoElement | null>(null)
const copiedId = ref('')
const activeCodeLangs = ref<Record<string, string>>({})

// 初始化
function init() {
  if (courses.value.length > 0) {
    const firstCourse = courses.value[0]
    currentCourse.value = firstCourse
    expandedCourses.value.clear()
    expandedCourses.value.add(firstCourse.id)
    if (firstCourse.chapters.length > 0) {
      activeChapter.value = firstCourse.chapters[0]
    }
  }
}

function toggleCourse(course: ProgrammingCourse) {
  if (expandedCourses.value.has(course.id)) {
    expandedCourses.value.delete(course.id)
  } else {
    expandedCourses.value.clear()
    expandedCourses.value.add(course.id)
  }
}

function selectChapter(course: ProgrammingCourse, chapter: ProgrammingChapter) {
  currentCourse.value = course
  activeChapter.value = chapter
  showMenu.value = false
  window.scrollTo({ top: 0, behavior: 'instant' })
}

function hasCodeImpl(point: KnowledgePoint): boolean {
  return !!point.codeImpl && Object.keys(point.codeImpl).length > 0
}

// 获取当前语言的章节视频
function getChapterVideo(): string | undefined {
  if (!activeChapter.value?.video) return undefined
  // 先查原始语言，再查映射语言
  const directVideo = activeChapter.value.video[defaultLang.value as CodeImplKey]
  if (directVideo) return directVideo
  return activeChapter.value.video[getMappedLang(defaultLang.value) as CodeImplKey]
}

// 获取当前语言的知识点视频
function getPointVideo(point: KnowledgePoint): string | undefined {
  if (!point.video) return undefined
  // 先查原始语言，再查映射语言
  const directVideo = point.video[defaultLang.value as CodeImplKey]
  if (directVideo) return directVideo
  return point.video[getMappedLang(defaultLang.value) as CodeImplKey]
}

// 可选语言列表
function getAvailableLangs(point: KnowledgePoint): string[] {
  if (!point.codeImpl) return []
  if (filterLang.value) {
    // 先查原始语言，再查映射语言
    if (point.codeImpl[filterLang.value as CodeImplKey]) return [filterLang.value]
    if (point.codeImpl[getMappedLang(filterLang.value) as CodeImplKey]) return [getMappedLang(filterLang.value)]
    return []
  }
  return allLangs.value.filter(l => point.codeImpl?.[l as CodeImplKey] || point.codeImpl?.[getMappedLang(l) as CodeImplKey])
}

function getActiveCodeLang(pointId: string): string {
  if (activeCodeLangs.value[pointId]) return activeCodeLangs.value[pointId]
  return defaultLang.value
}

function setActiveCodeLang(pointId: string, langKey: string) {
  activeCodeLangs.value[pointId] = langKey
}

function getCodeBlocks(point: KnowledgePoint) {
  const activeLang = getActiveCodeLang(point.id)
  // 先查原始语言，再查映射语言
  const directBlocks = point.codeImpl?.[activeLang as CodeImplKey]
  if (directBlocks) return directBlocks
  return point.codeImpl?.[getMappedLang(activeLang) as CodeImplKey] || []
}

function getLangDisplayName(langKey: string): string {
  const names: Record<string, string> = {
    java: 'Java', javascript: 'JavaScript', python: 'Python', go: 'Go', c: 'C', csharp: 'C#', ai: 'AI编程',
    html: 'HTML', vue: 'Vue', react: 'React', android: 'Android', ios: 'iOS',
    harmonyos: '鸿蒙', uniapp: 'UniApp', miniprogram: '小程序', electron: 'Electron', qt: 'Qt',
    ai_vue: 'AI编程Vue'
  }
  return names[langKey] || langKey
}

function getCodeContent(codeBlock: CodeBlock): string {
  if (codeBlock.prompt) {
    return `/*
提示词 ${codeBlock.prompt}
*/

// AI生成:
${codeBlock.code}`
  }
  return codeBlock.code
}

async function playVideo(url: string) {
  videoUrl.value = url
  await nextTick()
  if (videoPlayer.value) {
    try {
      if (videoPlayer.value.requestFullscreen) {
        await videoPlayer.value.requestFullscreen()
      }
    } catch (err) { console.log('无法进入全屏模式:', err) }
  }
}

function copy(text: string, id: string) {
  navigator.clipboard.writeText(text)
  copiedId.value = id
  setTimeout(() => { if (copiedId.value === id) copiedId.value = '' }, 2000)
}

function goHome() { router.push('/') }
function goLogin() { router.push('/login') }
function scrollToElement(id: string) {
  const el = document.getElementById(id)
  if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
}
</script>

<style scoped>
.learn-page { min-height: 100vh; background: #f5f5f5; }
.top-bar { display: flex; align-items: center; padding: 12px 16px; background: #fff; border-bottom: 1px solid #eee; position: sticky; top: 0; z-index: 100; }
.back { cursor: pointer; color: #666; font-size: 14px; }
.back:hover { color: #333; }
.title { flex: 1; text-align: center; font-weight: bold; font-size: 18px; color: #333; }
.login-btn { font-size: 14px; color: #4A90D9; cursor: pointer; }
.login-btn:hover { text-decoration: underline; }
.menu-btn { display: none; font-size: 20px; cursor: pointer; color: #666; margin-left: 12px; }
.main-container { display: flex; }
.sidebar { width: 180px; background: #fff; border-right: 1px solid #eee; height: calc(100vh - 50px); position: sticky; top: 50px; overflow-y: auto; flex-shrink: 0; }
.course-title { display: flex; justify-content: space-between; align-items: center; padding: 12px; cursor: pointer; font-size: 13px; color: #333; border-bottom: 1px solid #f5f5f5; }
.course-title:hover { background: #f9f9f9; }
.course-title.active { color: #4A90D9; font-weight: 500; }
.arrow { color: #999; font-size: 16px; }
.chapter-list { background: #fafafa; }
.chapter-item { padding: 10px 16px 10px 32px; cursor: pointer; font-size: 13px; color: #666; border-left: 2px solid transparent; }
.chapter-item:hover { background: #f0f0f0; color: #333; }
.chapter-item.active { background: #e8f4ff; color: #4A90D9; border-left-color: #4A90D9; }
.content { flex: 1; padding: 20px 110px 20px 24px; min-width: 0; }
.chapter-header { display: flex; align-items: center; gap: 12px; margin-bottom: 20px; padding-bottom: 12px; border-bottom: 1px solid #eee; }
.chapter-header h1 { font-size: 20px; color: #333; margin: 0; }
.chapter-video-btn, .lesson-video-btn { font-size: 12px; color: #4A90D9; cursor: pointer; padding: 4px 10px; border: 1px solid #4A90D9; border-radius: 4px; }
.chapter-video-btn:hover, .lesson-video-btn:hover { background: #4A90D9; color: #fff; }
.lesson-section { margin-bottom: 28px; }
.lesson-title { display: flex; align-items: center; gap: 12px; font-size: 16px; font-weight: 600; color: #333; margin-bottom: 12px; padding-left: 10px; border-left: 3px solid #4A90D9; }
.blocks { padding-left: 13px; }
.block-heading { font-size: 15px; color: #333; margin: 16px 0 8px; }
.block-text { font-size: 14px; line-height: 1.7; color: #555; margin-bottom: 10px; }
.block-list { font-size: 14px; line-height: 1.7; color: #555; padding-left: 20px; margin-bottom: 10px; }
.block-list li { margin-bottom: 4px; }
.block-image img, .block-video video { max-width: 100%; border-radius: 4px; margin: 10px 0; }
.block-code { background: #1e1e1e; border-radius: 4px; overflow: hidden; margin: 10px 0; }
.code-head { display: flex; justify-content: space-between; padding: 4px 10px; background: #2d2d2d; font-size: 11px; color: #9cdcfe; }
.filename { font-family: Consolas, monospace; }
.copy-box { display: flex; align-items: center; gap: 6px; }
.copy-text { font-size: 11px; color: #2ECC71; animation: fadeIn 0.2s; }
@keyframes fadeIn { from { opacity: 0; transform: translateX(4px); } to { opacity: 1; transform: translateX(0); } }
.copy-icon { cursor: pointer; color: #888; display: flex; align-items: center; padding: 2px; border-radius: 3px; }
.copy-icon:hover { color: #fff; background: rgba(255,255,255,0.1); }
.copy-icon .check { color: #2ECC71; }
.block-code pre { margin: 0; padding: 10px; overflow-x: auto; font-family: Consolas, monospace; font-size: 13px; color: #d4d4d4; line-height: 1.5; }
.block-table { margin: 10px 0; overflow-x: auto; }
.block-table table { width: 100%; border-collapse: collapse; font-size: 13px; }
.block-table th, .block-table td { border: 1px solid #e5e5e5; padding: 8px 10px; text-align: left; }
.block-table th { background: #f5f5f5; font-weight: 500; }
.block-tip { padding: 10px 14px; background: #e8f8f0; border-radius: 4px; color: #2d8659; font-size: 13px; margin: 10px 0; }
.block-warning { padding: 10px 14px; background: #fff8e6; border-radius: 4px; color: #b58105; font-size: 13px; margin: 10px 0; }
.block-quote { margin: 10px 0; padding: 10px 16px; border-left: 3px solid #ddd; color: #666; font-size: 14px; font-style: italic; background: #f9f9f9; }
.code-impl-section { margin-top: 10px; }
.code-tabs { display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap; }
.code-tab { padding: 4px 12px; border-radius: 4px; cursor: pointer; font-size: 12px; color: #666; background: #f5f5f5; border: 1px solid #e5e5e5; }
.code-tab:hover { background: #e8e8e8; }
.code-tab.active { background: #4A90D9; color: #fff; border-color: #4A90D9; }
.fc-if { display: flex; flex-direction: column; align-items: center; padding: 10px 0; font-family: monospace; font-size: 12px; }
.fc-node { padding: 3px 8px; border: 1px solid #4A90D9; border-radius: 3px; background: #e8f4fc; }
.fc-node.decision { background: #fff3cd; border-color: #ffc107; }
.fc-if-tree { display: flex; gap: 20px; color: #666; font-size: 14px; }
.fc-if-labels { display: flex; gap: 10px; font-size: 10px; color: #666; }
.fc-if-children { display: flex; gap: 10px; }
.fc-if-child { display: flex; flex-direction: column; align-items: center; }
.fc-if-empty { min-width: 60px; height: 20px; }
.empty { text-align: center; padding: 60px; color: #999; }
.quick-nav { position: fixed; top: 52px; right: 0; width: 100px; max-height: calc(100vh - 60px); background: rgba(255,255,255,0.9); border-left: 1px solid #eee; font-size: 13px; overflow-y: auto; padding: 2px 0; }
.nav-group { margin-bottom: 2px; }
.nav-item { padding: 3px 6px; cursor: pointer; color: #333; font-weight: 500; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; display: flex; align-items: center; gap: 4px; }
.dot { font-size: 8px; color: #4A90D9; }
.nav-item:hover { color: #4A90D9; background: #f5f5f5; }
.video-modal { position: fixed; inset: 0; background: rgba(0,0,0,0.8); display: flex; align-items: center; justify-content: center; z-index: 200; }
.video-modal video { max-width: 90%; max-height: 80%; border-radius: 8px; }
@media (max-width: 768px) {
  .menu-btn { display: block; }
  .main-container { flex-direction: column; }
  .sidebar { position: fixed; top: 50px; left: 0; width: 180px; height: calc(100vh - 50px); transform: translateX(-100%); transition: transform 0.3s; z-index: 99; box-shadow: 2px 0 10px rgba(0,0,0,0.1); }
  .sidebar.show { transform: translateX(0); }
  .content { padding: 16px; }
  .chapter-header h1 { font-size: 18px; }
  .quick-nav { display: none; }
}
</style>
