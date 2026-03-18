// ========== 通用课程数据结构 ==========

// Block类型
export type BlockType = 'text' | 'heading' | 'code' | 'image' | 'video' | 'table' | 'tip' | 'warning' | 'quote' | 'list' | 'download' | 'flowchart' | 'flowchart-if' | 'flowchart-if-else' | 'flowchart-for'

// 流程图步骤
export interface FlowStep {
  text: string
  type?: 'start' | 'process' | 'decision' | 'end'
  branch?: 'yes' | 'no'  // 分支标记
}

// 内容块
export interface Block {
  id: string
  type: BlockType
  content?: string           // text/heading/tip
  items?: string[]           // list
  src?: string               // image/video
  language?: string          // code语言
  filename?: string          // code文件名
  code?: string              // code内容
  headers?: string[]         // table表头
  rows?: string[][]          // table数据行
  text?: string              // download按钮文字
  url?: string               // download链接
  steps?: FlowStep[]         // flowchart步骤
}

// 知识点
export interface Lesson {
  id: string
  title: string
  video?: string             // 知识点视频（小按钮）
  blocks: Block[]
}

// 章节
export interface Chapter {
  id: string
  title: string
  video?: string             // 章节视频（右侧播放）
  lessons: Lesson[]
}

// 课程
export interface Course {
  id: string
  pathId: string             // 所属路线ID，用于查询关联课程
  title: string
  desc?: string
  icon?: string
  interactivePage?: string   // 交互式页面路由（如AI面试）
  chapters: Chapter[]
}

// 导航项
export interface NavItem {
  id: string
  name: string
  path: string
  children?: NavItem[]  // 子导航
}

// ========== 编程知识点数据结构（多语言/多技术栈复用） ==========

// 支持的后端编程语言（含AI）
export type ProgrammingLanguage = 'java' | 'python' | 'go' | 'javascript' | 'c' | 'csharp' | 'ai'

// 支持的前端技术栈
export type FrontendTech = 'html' | 'vue' | 'react' | 'android' | 'ios' | 'harmonyos' | 'uniapp' | 'miniprogram' | 'electron' | 'qt'

// 代码实现类型（后端语言 + 前端技术栈）
export type CodeImplKey = ProgrammingLanguage | FrontendTech

// 代码块
export interface CodeBlock {
  id: string
  filename: string
  code: string
  prompt?: string              // AI提示词（仅ai语言使用）
}

// 知识点（支持多语言/多技术栈代码）
export interface KnowledgePoint {
  id: string
  title: string
  video?: Partial<Record<CodeImplKey, string>>  // 多语言/多技术栈视频
  blocks: Block[]                           // 通用内容：text/list/tip/table/img/video
  codeImpl?: Partial<Record<CodeImplKey, CodeBlock[]>>  // 多语言/多技术栈代码实现
}

// 编程章节
export interface ProgrammingChapter {
  id: string
  title: string
  video?: Partial<Record<CodeImplKey, string>>  // 多语言/多技术栈视频
  points: KnowledgePoint[]
}

// 编程课程
export interface ProgrammingCourse {
  id: string
  title: string
  icon: string
  chapters: ProgrammingChapter[]
}

// 语言课程组（后端/前端课程）
export interface LanguageCourseGroup {
  id: string
  title: string                             // 显示名称
  courses: ProgrammingCourse[]              // 课程列表
}
