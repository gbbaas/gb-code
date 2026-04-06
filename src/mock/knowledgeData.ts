import type { KnowledgePoint, ProgrammingCourse, LanguageCourseGroup } from '@/types/course'

// ========== 共享知识点库 ==========

// 变量知识点
const kpVariable: KnowledgePoint = {
  id: 'kp-variable',
  title: '变量',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '变量是用来存储数据的容器,可以存储和修改数据' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `// 定义变量语法：类型 变量名 = 值;

int price = 1;           // 定义price变量存价格为1块钱
IO.println(price);       // 输出1

price = 2;               // 修改价格为2块钱
IO.println(price);       // 输出2`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// 定义变量语法：let 变量名 = 值

let price = 1            // 定义price变量存价格为1块钱
console.log(price)       // 输出1

price = 2                // 修改价格为2块钱
console.log(price)       // 输出2`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# 定义变量语法：变量名 = 值

price = 1            # 定义price变量存价格为1块钱
print(price)         # 输出1

price = 2            # 修改价格为2块钱
print(price)         # 输出2`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// 定义变量语法：var 变量名 类型 = 值
// 简写语法：变量名 := 值

price := 1               // 定义price变量存价格为1块钱
fmt.Println(price)       // 输出1

price = 2                // 修改价格为2块钱
fmt.Println(price)       // 输出2`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// 定义变量语法：类型 变量名 = 值;

int price = 1;           // 定义price变量存价格为1块钱
printf("%d\\n", price);   // 输出1

price = 2;               // 修改价格为2块钱
printf("%d\\n", price);   // 输出2`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `// 定义变量语法：类型 变量名 = 值;

int price = 1;           // 定义price变量存价格为1块钱
Console.WriteLine(price);// 输出1

price = 2;               // 修改价格为2块钱
Console.WriteLine(price);// 输出2`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `定义一个price变量存储价格1块钱，输出它，然后修改为2块钱，再输出`,
      code: `let price = 1
console.log(price)       // 1

price = 2
console.log(price)       // 2`
    }]
  }
}

// 数据类型知识点
const kpDataType: KnowledgePoint = {
  id: 'kp-data-type',
  title: '数据类型',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '数据有不同类型：整数、小数、字符串等' },
    { id: 'b2', type: 'tip', content: '字符串要用双引号或单引号包裹（Java/C/Go只支持双引号）' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `// 定义变量语法：类型 变量名 = 值;
String userName = "张三";  // String：字符串，要用双引号包裹
String spuName = "牛奶";   // String：字符串，要用双引号包裹
double spuPrice = 2.5;    // double：小数
int spuCount = 3;         // int：整数
double total = 7.5;       // double：小数

IO.println("用户名称：" + userName);
IO.println("商品名称：" + spuName);
IO.println("商品单价：" + spuPrice + " 元");
IO.println("购买数量：" + spuCount);
IO.println("订单总价：" + total + " 元");`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// 定义变量语法：let 变量名 = 值（JS自动推断类型）
let userName = "张三"   // 字符串，要用双引号或单引号包裹
let spuName = "牛奶"    // 字符串，要用双引号或单引号包裹
let spuPrice = 2.5     // 数字(小数)
let spuCount = 3       // 数字(整数)
let total = 7.5        // 数字(小数)

console.log("用户名称：" + userName)
console.log("商品名称：" + spuName)
console.log("商品单价：" + spuPrice + " 元")
console.log("购买数量：" + spuCount)
console.log("订单总价：" + total + " 元")`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# 定义变量语法：变量名 = 值（Python自动推断类型）
user_name = "张三"   # str：字符串，要用双引号或单引号包裹
spu_name = "牛奶"    # str：字符串，要用双引号或单引号包裹
spu_price = 2.5     # float：小数
spu_count = 3       # int：整数
total = 7.5         # float：小数

print("用户名称：" + user_name)
print("商品名称：" + spu_name)
print("商品单价：" + str(spu_price) + " 元")
print("购买数量：" + str(spu_count))
print("订单总价：" + str(total) + " 元")`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// 定义变量语法：var 变量名 类型 = 值
var userName string = "张三"    // string：字符串，要用双引号包裹
var spuName string = "牛奶"     // string：字符串，要用双引号包裹
var spuPrice float64 = 2.5     // float64：小数
var spuCount int = 3           // int：整数
var total float64 = 7.5        // float64：小数

fmt.Println("用户名称：" + userName)
fmt.Println("商品名称：" + spuName)
fmt.Printf("商品单价：%.1f 元\\n", spuPrice)
fmt.Printf("购买数量：%d\\n", spuCount)
fmt.Printf("订单总价：%.1f 元\\n", total)`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// 定义变量语法：类型 变量名 = 值;
char userName[] = "张三";   // char[]：字符数组，要用双引号包裹
char spuName[] = "牛奶";    // char[]：字符数组，要用双引号包裹
double spuPrice = 2.5;     // double：小数
int spuCount = 3;          // int：整数
double total = 7.5;        // double：小数

printf("用户名称：%s\\n", userName);
printf("商品名称：%s\\n", spuName);
printf("商品单价：%.1f 元\\n", spuPrice);
printf("购买数量：%d\\n", spuCount);
printf("订单总价：%.1f 元\\n", total);`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `// 定义变量语法：类型 变量名 = 值;
string userName = "张三";   // string：字符串，要用双引号包裹
string spuName = "牛奶";    // string：字符串，要用双引号包裹
double spuPrice = 2.5;     // double：小数
int spuCount = 3;          // int：整数
double total = 7.5;        // double：小数

Console.WriteLine("用户名称：" + userName);
Console.WriteLine("商品名称：" + spuName);
Console.WriteLine("商品单价：" + spuPrice + " 元");
Console.WriteLine("购买数量：" + spuCount);
Console.WriteLine("订单总价：" + total + " 元");`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `用不同类型的变量存储一个订单信息：
- 用户名称：张三（字符串）
- 商品名称：牛奶（字符串）
- 商品单价：2.5（小数）
- 购买数量：3（整数）
- 订单总价：7.5（小数）
然后输出所有信息`,
      code: `let userName = "张三"
let spuName = "牛奶"
let spuPrice = 2.5
let spuCount = 3
let total = 7.5

console.log("用户名称：" + userName)
console.log("商品名称：" + spuName)
console.log("商品单价：" + spuPrice + " 元")
console.log("购买数量：" + spuCount)
console.log("订单总价：" + total + " 元")`
    }]
  }
}

// 数组知识点
const kpArray: KnowledgePoint = {
  id: 'kp-array',
  title: '数组',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '数组：存储多个同类型数据，可以存字符串、存对象' },
    { id: 'b2', type: 'tip', content: '数组可以存任意类型：字符串数组、数字数组、对象数组等' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `import java.util.*;

// ===== 1.字符串数组 =====
List<String> names = new ArrayList<>();
names.add("张三");
names.add("李四");

for (String name : names) {
    IO.println(name);  // 张三、李四
}

// ===== 2.对象数组 =====
// 先定义类
class User {
    String name;
    int age;
    User(String name, int age) {
        this.name = name;
        this.age = age;
    }
}

// 创建对象数组
List<User> users = new ArrayList<>();
users.add(new User("张三", 18));
users.add(new User("李四", 20));

for (User u : users) {
    IO.println(u.name + " - " + u.age + "岁");
}`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// ===== 1.字符串数组 =====
let names = []
names.push("张三")
names.push("李四")

for (let name of names) {
    console.log(name)  // 张三、李四
}

// ===== 2.对象数组 =====
let users = []
users.push({ name: "张三", age: 18 })
users.push({ name: "李四", age: 20 })

for (let u of users) {
    console.log(\`\${u.name} - \${u.age}岁\`)
}`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# ===== 1.字符串数组 =====
names = []
names.append("张三")
names.append("李四")

for name in names:
    print(name)  # 张三、李四

# ===== 2.对象数组（用字典） =====
users = []
users.append({"name": "张三", "age": 18})
users.append({"name": "李四", "age": 20})

for u in users:
    print(f"{u['name']} - {u['age']}岁")`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// ===== 1.字符串数组 =====
names := []string{}
names = append(names, "张三")
names = append(names, "李四")

for _, name := range names {
    fmt.Println(name)  // 张三、李四
}

// ===== 2.对象数组 =====
type User struct {
    Name string
    Age  int
}

users := []User{}
users = append(users, User{"张三", 18})
users = append(users, User{"李四", 20})

for _, u := range users {
    fmt.Printf("%s - %d岁\\n", u.Name, u.Age)
}`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// ===== 1.字符串数组 =====
char* names[2];
names[0] = "张三";
names[1] = "李四";

for (int i = 0; i < 2; i++) {
    printf("%s\\n", names[i]);  // 张三、李四
}

// ===== 2.对象数组（结构体数组） =====
struct User {
    char name[20];
    int age;
};

struct User users[2];
strcpy(users[0].name, "张三"); users[0].age = 18;
strcpy(users[1].name, "李四"); users[1].age = 20;

for (int i = 0; i < 2; i++) {
    printf("%s - %d岁\\n", users[i].name, users[i].age);
}`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `// ===== 1.字符串数组 =====
var names = new List<string>();
names.Add("张三");
names.Add("李四");

foreach (var name in names) {
    Console.WriteLine(name);  // 张三、李四
}

// ===== 2.对象数组 =====
class User {
    public string Name { get; set; }
    public int Age { get; set; }
}

var users = new List<User>();
users.Add(new User { Name = "张三", Age = 18 });
users.Add(new User { Name = "李四", Age = 20 });

foreach (var u in users) {
    Console.WriteLine($"{u.Name} - {u.Age}岁");
}`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `演示两种数组：
1. 字符串数组：添加张三、李四，遍历输出
2. 对象数组：添加两个用户对象（name和age），遍历输出"名字-年龄岁"`,
      code: `// 1.字符串数组
let names = []
names.push("张三")
names.push("李四")

for (let name of names) {
    console.log(name)
}

// 2.对象数组
let users = []
users.push({ name: "张三", age: 18 })
users.push({ name: "李四", age: 20 })

for (let u of users) {
    console.log(\`\${u.name} - \${u.age}岁\`)
}`
    }]
  }
}

// ========== 条件分支知识点 ==========

// if语句知识点
const kpIf: KnowledgePoint = {
  id: 'kp-if',
  title: 'if语句',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'if语句：条件为true时执行代码块，比如判断是否要打折' },
    { id: 'b2', type: 'flowchart-if', steps: [
      { text: '满20?', type: 'decision' },
      { text: '打8折', branch: 'yes' }
    ]}
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `// if语法：if (条件) { 执行代码 }
double total = 25;

// 判断满20打8折
if (total >= 20) {
    total = total * 0.8;
    IO.println("满20打8折，实付：" + total + "元");
}
// 输出：满20打8折，实付：20.0元`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// if语法：if (条件) { 执行代码 }
let total = 25

// 判断满20打8折
if (total >= 20) {
    total = total * 0.8
    console.log(\`满20打8折，实付：\${total}元\`)
}
// 输出：满20打8折，实付：20元`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# if语法：if 条件:
total = 25

# 判断满20打8折
if total >= 20:
    total = total * 0.8
    print(f"满20打8折，实付：{total}元")
# 输出：满20打8折，实付：20.0元`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// if语法：if 条件 { 执行代码 }
total := 25.0

// 判断满20打8折
if total >= 20 {
    total = total * 0.8
    fmt.Printf("满20打8折，实付：%.1f元\\n", total)
}
// 输出：满20打8折，实付：20.0元`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// if语法：if (条件) { 执行代码 }
double total = 25;

// 判断满20打8折
if (total >= 20) {
    total = total * 0.8;
    printf("满20打8折，实付：%.1f元\\n", total);
}
// 输出：满20打8折，实付：20.0元`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `// if语法：if (条件) { 执行代码 }
double total = 25;

// 判断满20打8折
if (total >= 20) {
    total = total * 0.8;
    Console.WriteLine($"满20打8折，实付：{total}元");
}
// 输出：满20打8折，实付：20元`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `订单金额25元，如果满20就打8折，输出实付金额`,
      code: `let total = 25

if (total >= 20) {
    total = total * 0.8
    console.log(\`满20打8折，实付：\${total}元\`)
}`
    }]
  }
}

// if-else知识点
const kpIfElseBasic: KnowledgePoint = {
  id: 'kp-if-else-basic',
  title: 'if-else',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'if-else：二选一，满足条件执行if，否则执行else' },
    { id: 'b2', type: 'flowchart-if-else', steps: [
      { text: '满20?', type: 'decision' },
      { text: '打8折', branch: 'yes' },
      { text: '原价', branch: 'no' }
    ]}
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `// if-else语法：if (条件) { } else { }
double total = 15;

if (total >= 20) {
    total = total * 0.8;
    IO.println("满20打8折，实付：" + total + "元");
} else {
    IO.println("不满折扣条件，实付：" + total + "元");
}
// 输出：不满折扣条件，实付：15.0元`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// if-else语法：if (条件) { } else { }
let total = 15

if (total >= 20) {
    total = total * 0.8
    console.log(\`满20打8折，实付：\${total}元\`)
} else {
    console.log(\`不满折扣条件，实付：\${total}元\`)
}
// 输出：不满折扣条件，实付：15元`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# if-else语法：if 条件: ... else: ...
total = 15

if total >= 20:
    total = total * 0.8
    print(f"满20打8折，实付：{total}元")
else:
    print(f"不满折扣条件，实付：{total}元")
# 输出：不满折扣条件，实付：15元`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// if-else语法：if 条件 { } else { }
total := 15.0

if total >= 20 {
    total = total * 0.8
    fmt.Printf("满20打8折，实付：%.1f元\\n", total)
} else {
    fmt.Printf("不满折扣条件，实付：%.1f元\\n", total)
}
// 输出：不满折扣条件，实付：15.0元`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// if-else语法：if (条件) { } else { }
double total = 15;

if (total >= 20) {
    total = total * 0.8;
    printf("满20打8折，实付：%.1f元\\n", total);
} else {
    printf("不满折扣条件，实付：%.1f元\\n", total);
}
// 输出：不满折扣条件，实付：15.0元`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `// if-else语法：if (条件) { } else { }
double total = 15;

if (total >= 20) {
    total = total * 0.8;
    Console.WriteLine($"满20打8折，实付：{total}元");
} else {
    Console.WriteLine($"不满折扣条件，实付：{total}元");
}
// 输出：不满折扣条件，实付：15元`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `订单金额15元，满20打8折，否则原价，输出实付金额`,
      code: `let total = 15

if (total >= 20) {
    total = total * 0.8
    console.log(\`满20打8折，实付：\${total}元\`)
} else {
    console.log(\`不满折扣条件，实付：\${total}元\`)
}`
    }]
  }
}

// if-else if-else知识点
const kpIfElseIfElse: KnowledgePoint = {
  id: 'kp-if-elseif-else',
  title: 'if-else if-else',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'if-else if-else：多选一，满20打8折，满10打9折，否则不打折' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `// 语法：if (条件1) { } else if (条件2) { } else { }
double total = 15;

if (total >= 20) {
    total = total * 0.8;
    IO.println("满20打8折，实付：" + total + "元");
} else if (total >= 10) {
    total = total * 0.9;
    IO.println("满10打9折，实付：" + total + "元");
} else {
    IO.println("不满折扣条件，实付：" + total + "元");
}
// 输出：满10打9折，实付：13.5元`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// 语法：if (条件1) { } else if (条件2) { } else { }
let total = 15

if (total >= 20) {
    total = total * 0.8
    console.log(\`满20打8折，实付：\${total}元\`)
} else if (total >= 10) {
    total = total * 0.9
    console.log(\`满10打9折，实付：\${total}元\`)
} else {
    console.log(\`不满折扣条件，实付：\${total}元\`)
}
// 输出：满10打9折，实付：13.5元`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# 语法：if 条件1: ... elif 条件2: ... else: ...
total = 15

if total >= 20:
    total = total * 0.8
    print(f"满20打8折，实付：{total}元")
elif total >= 10:
    total = total * 0.9
    print(f"满10打9折，实付：{total}元")
else:
    print(f"不满折扣条件，实付：{total}元")
# 输出：满10打9折，实付：13.5元`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// 语法：if 条件1 { } else if 条件2 { } else { }
total := 15.0

if total >= 20 {
    total = total * 0.8
    fmt.Printf("满20打8折，实付：%.1f元\\n", total)
} else if total >= 10 {
    total = total * 0.9
    fmt.Printf("满10打9折，实付：%.1f元\\n", total)
} else {
    fmt.Printf("不满折扣条件，实付：%.1f元\\n", total)
}
// 输出：满10打9折，实付：13.5元`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// 语法：if (条件1) { } else if (条件2) { } else { }
double total = 15;

if (total >= 20) {
    total = total * 0.8;
    printf("满20打8折，实付：%.1f元\\n", total);
} else if (total >= 10) {
    total = total * 0.9;
    printf("满10打9折，实付：%.1f元\\n", total);
} else {
    printf("不满折扣条件，实付：%.1f元\\n", total);
}
// 输出：满10打9折，实付：13.5元`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `// 语法：if (条件1) { } else if (条件2) { } else { }
double total = 15;

if (total >= 20) {
    total = total * 0.8;
    Console.WriteLine($"满20打8折，实付：{total}元");
} else if (total >= 10) {
    total = total * 0.9;
    Console.WriteLine($"满10打9折，实付：{total}元");
} else {
    Console.WriteLine($"不满折扣条件，实付：{total}元");
}
// 输出：满10打9折，实付：13.5元`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `订单金额15元，满20打8折，满10打9折，否则原价`,
      code: `let total = 15

if (total >= 20) {
    total = total * 0.8
    console.log(\`满20打8折，实付：\${total}元\`)
} else if (total >= 10) {
    total = total * 0.9
    console.log(\`满10打9折，实付：\${total}元\`)
} else {
    console.log(\`不满折扣条件，实付：\${total}元\`)
}`
    }]
  }
}

// ========== 循环知识点 ==========

// for循环知识点
const kpForLoop: KnowledgePoint = {
  id: 'kp-for-loop',
  title: 'for循环',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'for循环：重复执行代码块，直到条件不满足' },
    { id: 'b2', type: 'tip', content: '循环三要素：初始化、条件判断、更新' },
    { id: 'b3', type: 'flowchart', steps: [
      { text: '1.初始化i=0', type: 'start' },
      { text: '2.i<5?', type: 'decision' },
      { text: '3.执行代码', branch: 'yes' },
      { text: '4.i++' },
      { text: '结束', type: 'end', branch: 'no' }
    ]}
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `// for循环语法：for (初始化; 条件; 更新) { 循环体 }
for (int i = 0; i < 5; i++) {
    IO.println("第" + i + "次循环");
}

// 输出：
// 第0次循环
// 第1次循环
// 第2次循环
// 第3次循环
// 第4次循环`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// for循环语法：for (初始化; 条件; 更新) { 循环体 }
for (let i = 0; i < 5; i++) {
    console.log(\`第\${i}次循环\`)
}

// 输出：
// 第0次循环
// 第1次循环
// 第2次循环
// 第3次循环
// 第4次循环`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# for循环语法：for 变量 in range(次数):
for i in range(5):
    print(f"第{i}次循环")

# 输出：
# 第0次循环
# 第1次循环
# 第2次循环
# 第3次循环
# 第4次循环`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// for循环语法：for 初始化; 条件; 更新 { 循环体 }
for i := 0; i < 5; i++ {
    fmt.Printf("第%d次循环\\n", i)
}

// 输出：
// 第0次循环
// 第1次循环
// 第2次循环
// 第3次循环
// 第4次循环`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// for循环语法：for (初始化; 条件; 更新) { 循环体 }
for (int i = 0; i < 5; i++) {
    printf("第%d次循环\\n", i);
}

// 输出：
// 第0次循环
// 第1次循环
// 第2次循环
// 第3次循环
// 第4次循环`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `// for循环语法：for (初始化; 条件; 更新) { 循环体 }
for (int i = 0; i < 5; i++) {
    Console.WriteLine($"第{i}次循环");
}

// 输出：
// 第0次循环
// 第1次循环
// 第2次循环
// 第3次循环
// 第4次循环`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `使用for循环输出5次"第x次循环"，x从0到4`,
      code: `for (let i = 0; i < 5; i++) {
    console.log(\`第\${i}次循环\`)
}`
    }]
  }
}

// break结束循环知识点
const kpBreak: KnowledgePoint = {
  id: 'kp-break',
  title: 'break结束循环',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'break：立即结束整个循环，不再继续执行' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `// break：结束循环
int total = 0;
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        IO.println("第" + i + "次达标，停止累计");
        break;  // 结束循环
    }
    total = total + i;
    IO.println("第" + i + "次累计，total = " + total);
}
IO.println("最终结果：" + total);

// 输出：
// 第1次累计，total = 1
// 第2次累计，total = 3
// 第3次达标，停止累计
// 最终结果：3`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// break：结束循环
let total = 0
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log(\`第\${i}次达标，停止累计\`)
        break  // 结束循环
    }
    total = total + i
    console.log(\`第\${i}次累计，total = \${total}\`)
}
console.log(\`最终结果：\${total}\`)

// 输出：
// 第1次累计，total = 1
// 第2次累计，total = 3
// 第3次达标，停止累计
// 最终结果：3`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# break：结束循环
total = 0
for i in range(1, 6):
    if i == 3:
        print(f"第{i}次达标，停止累计")
        break  # 结束循环
    total = total + i
    print(f"第{i}次累计，total = {total}")
print(f"最终结果：{total}")

# 输出：
# 第1次累计，total = 1
# 第2次累计，total = 3
# 第3次达标，停止累计
# 最终结果：3`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// break：结束循环
total := 0
for i := 1; i <= 5; i++ {
    if i == 3 {
        fmt.Printf("第%d次达标，停止累计\\n", i)
        break  // 结束循环
    }
    total = total + i
    fmt.Printf("第%d次累计，total = %d\\n", i, total)
}
fmt.Printf("最终结果：%d\\n", total)

// 输出：
// 第1次累计，total = 1
// 第2次累计，total = 3
// 第3次达标，停止累计
// 最终结果：3`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// break：结束循环
int total = 0;
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        printf("第%d次达标，停止累计\\n", i);
        break;  // 结束循环
    }
    total = total + i;
    printf("第%d次累计，total = %d\\n", i, total);
}
printf("最终结果：%d\\n", total);

// 输出：
// 第1次累计，total = 1
// 第2次累计，total = 3
// 第3次达标，停止累计
// 最终结果：3`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `// break：结束循环
int total = 0;
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        Console.WriteLine($"第{i}次达标，停止累计");
        break;  // 结束循环
    }
    total = total + i;
    Console.WriteLine($"第{i}次累计，total = {total}");
}
Console.WriteLine($"最终结果：{total}");

// 输出：
// 第1次累计，total = 1
// 第2次累计，total = 3
// 第3次达标，停止累计
// 最终结果：3`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `循环累加1到5，到第3次时停止，输出最终结果`,
      code: `let total = 0
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log(\`第\${i}次达标，停止累计\`)
        break
    }
    total = total + i
    console.log(\`第\${i}次累计，total = \${total}\`)
}
console.log(\`最终结果：\${total}\`)`
    }]
  }
}

// continue跳过本次知识点
const kpContinue: KnowledgePoint = {
  id: 'kp-continue',
  title: 'continue跳过本次',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'continue：跳过本次循环，继续执行下一次' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `// continue：跳过本次，继续下一次
int total = 0;
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        IO.println("第" + i + "次跳过，不累计");
        continue;  // 跳过本次
    }
    total = total + i;
    IO.println("第" + i + "次累计，total = " + total);
}
IO.println("最终结果：" + total);

// 输出：
// 第1次累计，total = 1
// 第2次累计，total = 3
// 第3次跳过，不累计
// 第4次累计，total = 7
// 第5次累计，total = 12
// 最终结果：12`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// continue：跳过本次，继续下一次
let total = 0
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log(\`第\${i}次跳过，不累计\`)
        continue  // 跳过本次
    }
    total = total + i
    console.log(\`第\${i}次累计，total = \${total}\`)
}
console.log(\`最终结果：\${total}\`)

// 输出：
// 第1次累计，total = 1
// 第2次累计，total = 3
// 第3次跳过，不累计
// 第4次累计，total = 7
// 第5次累计，total = 12
// 最终结果：12`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# continue：跳过本次，继续下一次
total = 0
for i in range(1, 6):
    if i == 3:
        print(f"第{i}次跳过，不累计")
        continue  # 跳过本次
    total = total + i
    print(f"第{i}次累计，total = {total}")
print(f"最终结果：{total}")

# 输出：
# 第1次累计，total = 1
# 第2次累计，total = 3
# 第3次跳过，不累计
# 第4次累计，total = 7
# 第5次累计，total = 12
# 最终结果：12`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// continue：跳过本次，继续下一次
total := 0
for i := 1; i <= 5; i++ {
    if i == 3 {
        fmt.Printf("第%d次跳过，不累计\\n", i)
        continue  // 跳过本次
    }
    total = total + i
    fmt.Printf("第%d次累计，total = %d\\n", i, total)
}
fmt.Printf("最终结果：%d\\n", total)

// 输出：
// 第1次累计，total = 1
// 第2次累计，total = 3
// 第3次跳过，不累计
// 第4次累计，total = 7
// 第5次累计，total = 12
// 最终结果：12`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// continue：跳过本次，继续下一次
int total = 0;
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        printf("第%d次跳过，不累计\\n", i);
        continue;  // 跳过本次
    }
    total = total + i;
    printf("第%d次累计，total = %d\\n", i, total);
}
printf("最终结果：%d\\n", total);

// 输出：
// 第1次累计，total = 1
// 第2次累计，total = 3
// 第3次跳过，不累计
// 第4次累计，total = 7
// 第5次累计，total = 12
// 最终结果：12`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `// continue：跳过本次，继续下一次
int total = 0;
for (int i = 1; i <= 5; i++) {
    if (i == 3) {
        Console.WriteLine($"第{i}次跳过，不累计");
        continue;  // 跳过本次
    }
    total = total + i;
    Console.WriteLine($"第{i}次累计，total = {total}");
}
Console.WriteLine($"最终结果：{total}");

// 输出：
// 第1次累计，total = 1
// 第2次累计，total = 3
// 第3次跳过，不累计
// 第4次累计，total = 7
// 第5次累计，total = 12
// 最终结果：12`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `循环累加1到5，第3次跳过不累计，输出最终结果`,
      code: `let total = 0
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        console.log(\`第\${i}次跳过，不累计\`)
        continue
    }
    total = total + i
    console.log(\`第\${i}次累计，total = \${total}\`)
}
console.log(\`最终结果：\${total}\`)`
    }]
  }
}

// 条件判断知识点
const kpIfElse: KnowledgePoint = {
  id: 'kp-if-else',
  title: '条件判断',
  blocks: [
    { id: 'b1', type: 'text', content: '条件判断：根据条件执行不同的代码分支。' },
    { id: 'b2', type: 'tip', content: 'if-else可以嵌套，else if用于多条件判断' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `// if-else语法：if (条件) { } else if (条件) { } else { }
int score = 85;

if (score >= 90) {
    IO.println("优秀");
} else if (score >= 60) {
    IO.println("及格");
} else {
    IO.println("不及格");
}
// 输出：及格`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// if-else语法：if (条件) { } else if (条件) { } else { }
let score = 85

if (score >= 90) {
    console.log("优秀")
} else if (score >= 60) {
    console.log("及格")
} else {
    console.log("不及格")
}
// 输出：及格`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# if-else语法：if 条件: ... elif 条件: ... else: ...
score = 85

if score >= 90:
    print("优秀")
elif score >= 60:
    print("及格")
else:
    print("不及格")
# 输出：及格`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// if-else语法：if 条件 { } else if 条件 { } else { }
score := 85

if score >= 90 {
    fmt.Println("优秀")
} else if score >= 60 {
    fmt.Println("及格")
} else {
    fmt.Println("不及格")
}
// 输出：及格`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// if-else语法：if (条件) { } else if (条件) { } else { }
int score = 85;

if (score >= 90) {
    printf("优秀\\n");
} else if (score >= 60) {
    printf("及格\\n");
} else {
    printf("不及格\\n");
}
// 输出：及格`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `// if-else语法：if (条件) { } else if (条件) { } else { }
int score = 85;

if (score >= 90) {
    Console.WriteLine("优秀");
} else if (score >= 60) {
    Console.WriteLine("及格");
} else {
    Console.WriteLine("不及格");
}
// 输出：及格`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `判断分数85分属于哪个等级：
- 90分及以上：优秀
- 60分及以上：及格
- 60分以下：不及格`,
      code: `let score = 85

if (score >= 90) {
    console.log("优秀")
} else if (score >= 60) {
    console.log("及格")
} else {
    console.log("不及格")
}`
    }]
  }
}

// 方法/函数知识点
const kpFunction: KnowledgePoint = {
  id: 'kp-function',
  title: '函数',
  video: {
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '函数：将代码封装成可复用的单元，通过函数名调用' },
    { id: 'b2', type: 'tip', content: 'Java/C#没有独立函数，只有方法（必须在类里），将在面向对象章节讲解' }
  ],
  codeImpl: {
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// 定义函数：function 函数名() { 代码 }
function sayHello() {
    console.log("Hello")
}

// 调用函数
sayHello()  // 输出 Hello
sayHello()  // 再次调用`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# 定义函数：def 函数名(): 代码
def say_hello():
    print("Hello")

# 调用函数
say_hello()  # 输出 Hello
say_hello()  # 再次调用`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// 定义函数：func 函数名() { 代码 }
func sayHello() {
    fmt.Println("Hello")
}

func main() {
    // 调用函数
    sayHello()  // 输出 Hello
    sayHello()  // 再次调用
}`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// 定义函数：void 函数名() { 代码 }
void sayHello() {
    printf("Hello\\n");
}

int main() {
    // 调用函数
    sayHello();  // 输出 Hello
    sayHello();  // 再次调用
    return 0;
}`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `写一个sayHello函数，输出"Hello"，然后调用两次`,
      code: `function sayHello() {
    console.log("Hello")
}

sayHello()
sayHello()`
    }]
  }
}

// 函数参数知识点
const kpFunctionParam: KnowledgePoint = {
  id: 'kp-function-param',
  title: '函数参数',
  video: {
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '参数：调用函数时传入的数据，让函数能处理不同的输入' },
    { id: 'b2', type: 'tip', content: '参数就像函数的"原料"，传什么原料就加工什么' }
  ],
  codeImpl: {
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// 定义带参数的函数：function 函数名(参数名) {}
function greet(name) {
    console.log("你好，" + name)
}

// 多个参数用逗号分隔
function calcTotal(price, count) {
    console.log("总价：" + price * count + "元")
}

greet("张三")         // 你好，张三
greet("李四")         // 你好，李四

calcTotal(2.5, 3)     // 总价：7.5元
calcTotal(5, 2)       // 总价：10元`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# 定义带参数的函数：def 函数名(参数名):
def greet(name):
    print("你好，" + name)

# 多个参数用逗号分隔
def calc_total(price, count):
    print("总价：" + str(price * count) + "元")

greet("张三")         # 你好，张三
greet("李四")         # 你好，李四

calc_total(2.5, 3)    # 总价：7.5元
calc_total(5, 2)      # 总价：10元`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// 定义带参数的函数：func 函数名(参数名 类型) {}
func greet(name string) {
    fmt.Println("你好，" + name)
}

// 多个参数用逗号分隔
func calcTotal(price float64, count int) {
    fmt.Printf("总价：%.1f元\\n", price * float64(count))
}

func main() {
    greet("张三")         // 你好，张三
    greet("李四")         // 你好，李四
    
    calcTotal(2.5, 3)     // 总价：7.5元
    calcTotal(5, 2)       // 总价：10元
}`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// 定义带参数的函数：返回类型 函数名(类型 参数名) {}
void greet(char* name) {
    printf("你好，%s\\n", name);
}

// 多个参数用逗号分隔
void calcTotal(double price, int count) {
    printf("总价：%.1f元\\n", price * count);
}

int main() {
    greet("张三");        // 你好，张三
    greet("李四");        // 你好，李四
    
    calcTotal(2.5, 3);    // 总价：7.5元
    calcTotal(5, 2);      // 总价：10元
    return 0;
}`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `写两个函数：
1. greet函数：接收一个名字参数，输出"你好，xxx"
2. calcTotal函数：接收价格和数量两个参数，输出"总价：xxx元"
然后分别用不同参数调用这两个函数`,
      code: `function greet(name) {
    console.log("你好，" + name)
}

function calcTotal(price, count) {
    console.log("总价：" + price * count + "元")
}

greet("张三")
greet("李四")

calcTotal(2.5, 3)
calcTotal(5, 2)`
    }]
  }
}

// 函数返回值知识点
const kpFunctionReturn: KnowledgePoint = {
  id: 'kp-function-return',
  title: '函数返回值',
  video: {
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '返回值：函数执行完后返回的结果，用return语句返回' },
    { id: 'b2', type: 'tip', content: '返回值就像函数的"产品"，加工完原料后输出成品' }
  ],
  codeImpl: {
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// 有返回值：function 函数名(参数) { return 值 }
function calcTotal(price, count) {
    return price * count
}

// 调用时接收返回值
let total = calcTotal(2.5, 3)
console.log("总价：" + total + "元")  // 总价：7.5元

// 返回值可以直接使用
console.log("双倍价：" + calcTotal(2.5, 3) * 2 + "元")  // 双倍价：15元`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# 有返回值：def 函数名(参数): return 值
def calc_total(price, count):
    return price * count

# 调用时接收返回值
total = calc_total(2.5, 3)
print("总价：" + str(total) + "元")  # 总价：7.5元

# 返回值可以直接使用
print("双倍价：" + str(calc_total(2.5, 3) * 2) + "元")  # 双倍价：15元`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// 有返回值：func 函数名(参数) 返回类型 { return 值 }
func calcTotal(price float64, count int) float64 {
    return price * float64(count)
}

func main() {
    // 调用时接收返回值
    total := calcTotal(2.5, 3)
    fmt.Printf("总价：%.1f元\\n", total)  // 总价：7.5元
    
    // 返回值可以直接使用
    fmt.Printf("双倍价：%.1f元\\n", calcTotal(2.5, 3) * 2)  // 双倍价：15元
}`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// 有返回值：返回类型 函数名(参数) { return 值; }
double calcTotal(double price, int count) {
    return price * count;
}

int main() {
    // 调用时接收返回值
    double total = calcTotal(2.5, 3);
    printf("总价：%.1f元\\n", total);  // 总价：7.5元
    
    // 返回值可以直接使用
    printf("双倍价：%.1f元\\n", calcTotal(2.5, 3) * 2);  // 双倍价：15元
    return 0;
}`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `写一个calcTotal函数：
- 接收价格和数量两个参数
- 返回总价（价格×数量）
然后调用这个函数，把返回值存到变量并输出，再直接用返回值计算双倍价`,
      code: `function calcTotal(price, count) {
    return price * count
}

let total = calcTotal(2.5, 3)
console.log("总价：" + total + "元")

console.log("双倍价：" + calcTotal(2.5, 3) * 2 + "元")`
    }]
  }
}

// 映射知识点
const kpMap: KnowledgePoint = {
  id: 'kp-map',
  title: '映射',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '映射：用键(key)映射到值(value)，可以把多个变量整合在一起' },
    { id: 'b2', type: 'tip', content: '不同语言叫法不同：Java叫HashMap，Python叫字典(dict)，JS用对象{}，Go叫map' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `import java.util.*;

// 定义映射语法：Map<键类型, 值类型> 变量名 = new HashMap<>();
// Object表示任意类型，可以存字符串、整数、布尔等不同类型的值
Map<String, Object> user = new HashMap<>();

// 存值语法：变量名.put(键, 值);
user.put("name", "张三");
user.put("age", 18);
user.put("vip", true);

// 取值语法：变量名.get(键);
IO.println(user.get("name"));  // 张三
IO.println(user.get("age"));   // 18
IO.println(user.get("vip"));   // true`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// 定义映射语法：let 变量名 = { 键: 值 }
let user = {
    name: "张三",
    age: 18,
    vip: true
}

// 取值语法：变量名.键 或 变量名["键"]
console.log(user.name)   // 张三
console.log(user.age)    // 18
console.log(user["vip"]) // true

// 修改值
user.age = 19
console.log(user.age)    // 19`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# 定义映射（字典）语法：变量名 = { 键: 值 }
user = {
    "name": "张三",
    "age": 18,
    "vip": True
}

# 取值语法：变量名[键]
print(user["name"])  # 张三
print(user["age"])   # 18
print(user["vip"])   # True

# 修改值
user["age"] = 19
print(user["age"])   # 19`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// 定义映射语法：变量名 := map[键类型]值类型{ 键: 值 }
// interface{}表示任意类型，可以存字符串、整数、布尔等不同类型的值
user := map[string]interface{}{
    "name": "张三",
    "age":  18,
    "vip":  true,
}

// 取值语法：变量名[键]
fmt.Println(user["name"])  // 张三
fmt.Println(user["age"])   // 18
fmt.Println(user["vip"])   // true

// 修改值
user["age"] = 19
fmt.Println(user["age"])   // 19`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// C语言没有内置映射，用结构体模拟
// 定义结构体语法：struct 名称 { 类型 字段名; };
struct User {
    char name[20];
    int age;
    int vip;  // 0=false, 1=true
};

// 创建并赋值
struct User user;
strcpy(user.name, "张三");
user.age = 18;
user.vip = 1;

// 取值语法：变量名.字段名
printf("%s\\n", user.name);  // 张三
printf("%d\\n", user.age);   // 18
printf("%d\\n", user.vip);   // 1`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `// 定义映射语法：Dictionary<键类型, 值类型> 变量名 = new();
// object表示任意类型，可以存字符串、整数、布尔等不同类型的值
var user = new Dictionary<string, object>
{
    { "name", "张三" },
    { "age", 18 },
    { "vip", true }
};

// 取值语法：变量名[键]
Console.WriteLine(user["name"]);  // 张三
Console.WriteLine(user["age"]);   // 18
Console.WriteLine(user["vip"]);   // True

// 修改值
user["age"] = 19;
Console.WriteLine(user["age"]);   // 19`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `创建一个用户映射，包含：
- name：张三
- age：18
- vip：true
然后输出所有值，并把年龄改成19再输出`,
      code: `let user = {
    name: "张三",
    age: 18,
    vip: true
}

console.log(user.name)  // 张三
console.log(user.age)   // 18
console.log(user.vip)   // true

user.age = 19
console.log(user.age)   // 19`
    }]
  }
}

// 类和对象知识点
const kpClassObject: KnowledgePoint = {
  id: 'kp-class-object',
  title: '类和对象',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '类：比映射更结构化的存数据方式，属性有明确的类型定义' },
    { id: 'b2', type: 'tip', content: '映射的键值类型灵活能任意添加，类的属性类型固定。对象是类的实例' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `// 定义类语法：class 类名 { 类型 属性名; }
class User {
    String name;   // 属性：名字
    int age;       // 属性：年龄
    boolean vip;   // 属性：是否VIP
}

// 创建对象语法：类名 变量名 = new 类名();
User user = new User();

// 给属性赋值
user.name = "张三";
user.age = 18;
user.vip = true;

// 取值
IO.println(user.name);  // 张三
IO.println(user.age);   // 18
IO.println(user.vip);   // true`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// 定义类语法：class 类名 { constructor() { this.属性 = 值 } }
class User {
    constructor(name, age, vip) {
        this.name = name   // 属性：名字
        this.age = age     // 属性：年龄
        this.vip = vip     // 属性：是否VIP
    }
}

// 创建对象语法：new 类名(参数)
let user = new User("张三", 18, true)

// 取值
console.log(user.name)  // 张三
console.log(user.age)   // 18
console.log(user.vip)   // true`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# 定义类语法：class 类名: def __init__(self, 属性): self.属性 = 属性
class User:
    def __init__(self, name, age, vip):
        self.name = name   # 属性：名字
        self.age = age     # 属性：年龄
        self.vip = vip     # 属性：是否VIP

# 创建对象语法：类名(参数)
user = User("张三", 18, True)

# 取值
print(user.name)  # 张三
print(user.age)   # 18
print(user.vip)   # True`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// Go用结构体实现类的效果
// 定义结构体语法：type 名称 struct { 字段 类型 }
type User struct {
    Name string  // 属性：名字
    Age  int     // 属性：年龄
    Vip  bool    // 属性：是否VIP
}

// 创建对象语法：类名{ 字段: 值 }
user := User{
    Name: "张三",
    Age:  18,
    Vip:  true,
}

// 取值
fmt.Println(user.Name)  // 张三
fmt.Println(user.Age)   // 18
fmt.Println(user.Vip)   // true`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// C语言用结构体实现类的效果
// 定义结构体语法：struct 名称 { 类型 字段名; };
struct User {
    char name[20];  // 属性：名字
    int age;        // 属性：年龄
    int vip;        // 属性：是否VIP（0=否, 1=是）
};

// 创建对象
struct User user;

// 给属性赋值
strcpy(user.name, "张三");
user.age = 18;
user.vip = 1;

// 取值
printf("%s\\n", user.name);  // 张三
printf("%d\\n", user.age);   // 18
printf("%d\\n", user.vip);   // 1`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `// 定义类语法：class 类名 { 类型 属性名 { get; set; } }
class User {
    public string Name { get; set; }  // 属性：名字
    public int Age { get; set; }      // 属性：年龄
    public bool Vip { get; set; }     // 属性：是否VIP
}

// 创建对象语法：new 类名 { 属性 = 值 }
var user = new User {
    Name = "张三",
    Age = 18,
    Vip = true
};

// 取值
Console.WriteLine(user.Name);  // 张三
Console.WriteLine(user.Age);   // 18
Console.WriteLine(user.Vip);   // True`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `创建一个User类，包含三个属性：
- name：名字
- age：年龄
- vip：是否VIP
然后创建一个用户对象（张三，18岁，是VIP），输出所有属性`,
      code: `class User {
    constructor(name, age, vip) {
        this.name = name
        this.age = age
        this.vip = vip
    }
}

let user = new User("张三", 18, true)

console.log(user.name)  // 张三
console.log(user.age)   // 18
console.log(user.vip)   // true`
    }]
  }
}

// ========== 面向对象知识点（Java/C#专属） ==========

// 类和方法知识点
// 面向对象知识点

// 类和对象
const kpOOPClassObject: KnowledgePoint = {
  id: 'kp-oop-class-object',
  title: '类和对象',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '类：把多个变量打包成一个整体。\n对象：类的实例，存储具体数据。' },
    { id: 'b2', type: 'tip', content: 'Order是类（模板），new Order()创建的是对象（实例）。\n类只有一个，对象可以创建多个。' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `//语法：class 类名 { public 类型 属性名; }  对象：类名 变量名 = new 类名(); 变量名.属性名 = 值;
public class Order {
    public String userName;    //用户名称
    public String spuName;     //商品名称
    public double spuPrice;    //商品单价
    public int spuCount;       //购买数量
    public double total;       //订单总价
    public boolean status;     //支付状态
    public String createdAt;   //创建时间
}

void main() {
    Order order = new Order();
    order.userName = "张三";
    order.spuName = "牛奶";
    order.spuPrice = 2.5;
    order.spuCount = 3;
    order.total = 7.5;
    order.status = true;
    order.createdAt = "2024-01-01 12:30:00";
    
    IO.println("用户名称：" + order.userName);
    IO.println("商品名称：" + order.spuName);
    IO.println("商品单价：" + order.spuPrice + " 元");
    IO.println("购买数量：" + order.spuCount);
    IO.println("订单总价：" + order.total + " 元");
    IO.println("支付状态：" + order.status);
    IO.println("创建时间：" + order.createdAt);
}`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `//语法：class 类名 { 属性名 }  对象：let 变量名 = new 类名(); 变量名.属性名 = 值;
class Order {
    userName
    spuName
    spuPrice
    spuCount
    total
    status
    createdAt
}

let order = new Order()
order.userName = "张三"
order.spuName = "牛奶"
order.spuPrice = 2.5
order.spuCount = 3
order.total = 7.5
order.status = true
order.createdAt = "2024-01-01 12:30:00"

console.log("用户名称：" + order.userName)
console.log("商品名称：" + order.spuName)
console.log("商品单价：" + order.spuPrice + " 元")
console.log("购买数量：" + order.spuCount)
console.log("订单总价：" + order.total + " 元")
console.log("支付状态：" + order.status)
console.log("创建时间：" + order.createdAt)`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `#语法：class 类名: 属性名 = 值  对象：变量名 = 类名(); 变量名.属性名 = 值
class Order:
    user_name = ""
    spu_name = ""
    spu_price = 0.0
    spu_count = 0
    total = 0.0
    status = False
    created_at = ""

order = Order()
order.user_name = "张三"
order.spu_name = "牛奶"
order.spu_price = 2.5
order.spu_count = 3
order.total = 7.5
order.status = True
order.created_at = "2024-01-01 12:30:00"

print("用户名称：" + order.user_name)
print("商品名称：" + order.spu_name)
print("商品单价：" + str(order.spu_price) + " 元")
print("购买数量：" + str(order.spu_count))
print("订单总价：" + str(order.total) + " 元")
print("支付状态：" + str(order.status))
print("创建时间：" + order.created_at)`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `//语法：type 类名 struct { 属性名 类型 }  对象：变量名 := &类名{属性名: 值}
type Order struct {
    userName  string
    spuName   string
    spuPrice  float64
    spuCount  int
    total     float64
    status    bool
    createdAt string
}

order := &Order{
    userName:  "张三",
    spuName:   "牛奶",
    spuPrice:  2.5,
    spuCount:  3,
    total:     7.5,
    status:    true,
    createdAt: "2024-01-01 12:30:00",
}

fmt.Println("用户名称：" + order.userName)
fmt.Println("商品名称：" + order.spuName)
fmt.Printf("商品单价：%.1f 元\\n", order.spuPrice)
fmt.Printf("购买数量：%d\\n", order.spuCount)
fmt.Printf("订单总价：%.1f 元\\n", order.total)
fmt.Println("支付状态：" + strconv.FormatBool(order.status))
fmt.Println("创建时间：" + order.createdAt)`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `//语法：struct 类名 { 类型 属性名; };  对象：struct 类名 变量名; 变量名.属性名 = 值;
struct Order {
    char userName[20];
    char spuName[20];
    double spuPrice;
    int spuCount;
    double total;
    int status;  // 0=false, 1=true
    char createdAt[20];
};

int main() {
    struct Order order;
    strcpy(order.userName, "张三");
    strcpy(order.spuName, "牛奶");
    order.spuPrice = 2.5;
    order.spuCount = 3;
    order.total = 7.5;
    order.status = 1;
    strcpy(order.createdAt, "2024-01-01 12:30:00");
    
    printf("用户名称：%s\\n", order.userName);
    printf("商品名称：%s\\n", order.spuName);
    printf("商品单价：%.1f 元\\n", order.spuPrice);
    printf("购买数量：%d\\n", order.spuCount);
    printf("订单总价：%.1f 元\\n", order.total);
    printf("支付状态：%d\\n", order.status);
    printf("创建时间：%s\\n", order.createdAt);
    return 0;
}`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `//语法：class 类名 { public 类型 属性名; }  对象：类名 变量名 = new 类名(); 变量名.属性名 = 值;
class Order {
    public string UserName { get; set; }
    public string SpuName { get; set; }
    public double SpuPrice { get; set; }
    public int SpuCount { get; set; }
    public double Total { get; set; }
    public bool Status { get; set; }
    public string CreatedAt { get; set; }
}

var order = new Order {
    UserName = "张三",
    SpuName = "牛奶",
    SpuPrice = 2.5,
    SpuCount = 3,
    Total = 7.5,
    Status = true,
    CreatedAt = "2024-01-01 12:30:00"
};

Console.WriteLine("用户名称：" + order.UserName);
Console.WriteLine("商品名称：" + order.SpuName);
Console.WriteLine("商品单价：" + order.SpuPrice + " 元");
Console.WriteLine("购买数量：" + order.SpuCount);
Console.WriteLine("订单总价：" + order.Total + " 元");
Console.WriteLine("支付状态：" + order.Status);
Console.WriteLine("创建时间：" + order.CreatedAt);`
    }]
  }
}

// 方法
const kpOOPMethod: KnowledgePoint = {
  id: 'kp-oop-method',
  title: '方法',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '方法：把代码打包起来，通过对象调用。' },
    { id: 'b2', type: 'tip', content: '方法必须通过对象调用：order.insert()\n不能直接调用：insert() ✗' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `//语法：public 返回类型 方法名() { 代码 }  调用：对象.方法名();
public class Order {
    public String userName;
    public String spuName;
    public double spuPrice;
    public int spuCount;
    public double total;
    public boolean status;
    public String createdAt;
    
    public void insert() {
        IO.println("保存订单：" + userName + ", " + spuName + ", 总价" + total + "元");
    }
}

void main() {
    Order order = new Order();
    order.userName = "张三";
    order.spuName = "牛奶";
    order.spuPrice = 2.5;
    order.spuCount = 3;
    order.total = 7.5;
    order.status = true;
    order.createdAt = "2024-01-01 12:30:00";
    order.insert();
}`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `//语法：方法名() { 代码 }  调用：对象.方法名();
class Order {
    insert() {
        console.log("保存订单：" + this.userName + ", " + this.spuName + ", 总价" + this.total + "元")
    }
}

let order = new Order()
order.userName = "张三"
order.spuName = "牛奶"
order.spuPrice = 2.5
order.spuCount = 3
order.total = 7.5
order.status = true
order.createdAt = "2024-01-01 12:30:00"
order.insert()`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `#语法：def 方法名(self): 代码  调用：对象.方法名()
class Order:
    def insert(self):
        print("保存订单：" + self.user_name + ", " + self.spu_name + ", 总价" + str(self.total) + "元")

order = Order()
order.user_name = "张三"
order.spu_name = "牛奶"
order.spu_price = 2.5
order.spu_count = 3
order.total = 7.5
order.status = True
order.created_at = "2024-01-01 12:30:00"
order.insert()`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `//语法：func (变量 *类名) 方法名() { 代码 }  调用：变量.方法名()
type Order struct {
    userName  string
    spuName   string
    spuPrice  float64
    spuCount  int
    total     float64
    status    bool
    createdAt string
}

func (o *Order) insert() {
    fmt.Println("保存订单：" + o.userName + ", " + o.spuName + ", 总价", o.total, "元")
}

order := &Order{
    userName:  "张三",
    spuName:   "牛奶",
    spuPrice:  2.5,
    spuCount:  3,
    total:     7.5,
    status:    true,
    createdAt: "2024-01-01 12:30:00",
}
order.insert()`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `//语法：C语言用结构体+函数指针模拟方法
struct Order {
    char userName[20];
    char spuName[20];
    double spuPrice;
    int spuCount;
    double total;
    int status;
    char createdAt[20];
    void (*insert)(struct Order*);
};

void insert(struct Order *o) {
    printf("保存订单：%s, %s, 总价%.1f元\\n", o->userName, o->spuName, o->total);
}

int main() {
    struct Order order = {"张三", "牛奶", 2.5, 3, 7.5, 1, "2024-01-01 12:30:00", insert};
    order.insert(&order);
    return 0;
}`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `//语法：public 返回类型 方法名() { 代码 }  调用：对象.方法名();
class Order {
    public string UserName { get; set; }
    public string SpuName { get; set; }
    public double SpuPrice { get; set; }
    public int SpuCount { get; set; }
    public double Total { get; set; }
    public bool Status { get; set; }
    public string CreatedAt { get; set; }
    
    public void Insert() {
        Console.WriteLine("保存订单：" + UserName + ", " + SpuName + ", 总价" + Total + "元");
    }
}

var order = new Order {
    UserName = "张三",
    SpuName = "牛奶",
    SpuPrice = 2.5,
    SpuCount = 3,
    Total = 7.5,
    Status = true,
    CreatedAt = "2024-01-01 12:30:00"
};
order.Insert();`
    }]
  }
}

// this关键字
const kpOOPThis: KnowledgePoint = {
  id: 'kp-oop-this',
  title: 'this关键字',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'this：指当前对象，用于区分属性和参数同名的情况。' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `//语法：this.属性名 = 参数名; 用于区分属性和参数同名
public class Order {
    public String userName;
    public String spuName;
    public double spuPrice;
    public int spuCount;
    public double total;
    public boolean status;
    public String createdAt;
    
    public void insert(String userName, String spuName, double spuPrice, int spuCount, double total, boolean status, String createdAt) {
        this.userName = userName;
        this.spuName = spuName;
        this.spuPrice = spuPrice;
        this.spuCount = spuCount;
        this.total = total;
        this.status = status;
        this.createdAt = createdAt;
        IO.println("保存订单：" + this.userName + ", " + this.spuName);
    }
}

void main() {
    Order order = new Order();
    order.insert("张三", "牛奶", 2.5, 3, 7.5, true, "2024-01-01 12:30:00");
}`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `//语法：this.属性名 = 参数名; 用于区分属性和参数同名
class Order {
    insert(userName, spuName, spuPrice, spuCount, total, status, createdAt) {
        this.userName = userName;
        this.spuName = spuName;
        this.spuPrice = spuPrice;
        this.spuCount = spuCount;
        this.total = total;
        this.status = status;
        this.createdAt = createdAt;
        console.log("保存订单：" + this.userName + ", " + this.spuName);
    }
}

let order = new Order()
order.insert("张三", "牛奶", 2.5, 3, 7.5, true, "2024-01-01 12:30:00")`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `#语法：self.属性名 = 参数名; self代表当前对象
class Order:
    def insert(self, user_name, spu_name, spu_price, spu_count, total, status, created_at):
        self.user_name = user_name
        self.spu_name = spu_name
        self.spu_price = spu_price
        self.spu_count = spu_count
        self.total = total
        self.status = status
        self.created_at = created_at
        print("保存订单：" + self.user_name + ", " + self.spu_name)

order = Order()
order.insert("张三", "牛奶", 2.5, 3, 7.5, True, "2024-01-01 12:30:00")`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `//语法：变量名.属性名 = 参数名; 接收者就是当前对象
type Order struct {
    userName  string
    spuName   string
    spuPrice  float64
    spuCount  int
    total     float64
    status    bool
    createdAt string
}

func (o *Order) insert(userName string, spuName string, spuPrice float64, spuCount int, total float64, status bool, createdAt string) {
    o.userName = userName
    o.spuName = spuName
    o.spuPrice = spuPrice
    o.spuCount = spuCount
    o.total = total
    o.status = status
    o.createdAt = createdAt
    fmt.Println("保存订单：" + o.userName + ", " + o.spuName)
}

order := &Order{}
order.insert("张三", "牛奶", 2.5, 3, 7.5, true, "2024-01-01 12:30:00")`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `//语法：this.属性名 = 参数名; 用于区分属性和参数同名
class Order {
    public string UserName { get; set; }
    public string SpuName { get; set; }
    public double SpuPrice { get; set; }
    public int SpuCount { get; set; }
    public double Total { get; set; }
    public bool Status { get; set; }
    public string CreatedAt { get; set; }
    
    public void Insert(string userName, string spuName, double spuPrice, int spuCount, double total, bool status, string createdAt) {
        this.UserName = userName;
        this.SpuName = spuName;
        this.SpuPrice = spuPrice;
        this.SpuCount = spuCount;
        this.Total = total;
        this.Status = status;
        this.CreatedAt = createdAt;
        Console.WriteLine("保存订单：" + this.UserName + ", " + this.SpuName);
    }
}

var order = new Order();
order.Insert("张三", "牛奶", 2.5, 3, 7.5, true, "2024-01-01 12:30:00");`
    }]
  }
}

// 方法参数和返回值
const kpOOPMethodParamReturn: KnowledgePoint = {
  id: 'kp-oop-method-param-return',
  title: '方法参数和返回值',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '参数：传入数据。\n返回值：返回结果，void表示无返回值。' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `//语法：public 返回类型 方法名(类型 参数名) { return 返回值; }
public class Order {
    public String userName;
    public String spuName;
    public double spuPrice;
    public int spuCount;
    public double total;
    public boolean status;
    public String createdAt;
    
    public boolean insert(String userName, String spuName, double spuPrice, int spuCount, double total, boolean status, String createdAt) {
        this.userName = userName;
        this.spuName = spuName;
        this.spuPrice = spuPrice;
        this.spuCount = spuCount;
        this.total = total;
        this.status = status;
        this.createdAt = createdAt;
        IO.println("保存订单：" + userName);
        return true;
    }
}

void main() {
    Order order = new Order();
    boolean ok = order.insert("张三", "牛奶", 2.5, 3, 7.5, true, "2024-01-01 12:30:00");
    IO.println("保存结果：" + ok);
}`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `//语法：方法名(参数名) { return 返回值; }
class Order {
    insert(userName, spuName, spuPrice, spuCount, total, status, createdAt) {
        this.userName = userName;
        this.spuName = spuName;
        this.spuPrice = spuPrice;
        this.spuCount = spuCount;
        this.total = total;
        this.status = status;
        this.createdAt = createdAt;
        console.log("保存订单：" + userName);
        return true;
    }
}

let order = new Order()
let ok = order.insert("张三", "牛奶", 2.5, 3, 7.5, true, "2024-01-01 12:30:00")
console.log("保存结果：" + ok)`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `#语法：def 方法名(self, 参数名): return 返回值
class Order:
    def insert(self, user_name, spu_name, spu_price, spu_count, total, status, created_at):
        self.user_name = user_name
        self.spu_name = spu_name
        self.spu_price = spu_price
        self.spu_count = spu_count
        self.total = total
        self.status = status
        self.created_at = created_at
        print("保存订单：" + user_name)
        return True

order = Order()
ok = order.insert("张三", "牛奶", 2.5, 3, 7.5, True, "2024-01-01 12:30:00")
print("保存结果：" + str(ok))`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `//语法：func (o *类名) 方法名(参数名 类型) 返回类型 { return 返回值 }
type Order struct {
    userName  string
    spuName   string
    spuPrice  float64
    spuCount  int
    total     float64
    status    bool
    createdAt string
}

func (o *Order) insert(userName string, spuName string, spuPrice float64, spuCount int, total float64, status bool, createdAt string) bool {
    o.userName = userName
    o.spuName = spuName
    o.spuPrice = spuPrice
    o.spuCount = spuCount
    o.total = total
    o.status = status
    o.createdAt = createdAt
    fmt.Println("保存订单：" + userName)
    return true
}

func main() {
    order := &Order{}
    ok := order.insert("张三", "牛奶", 2.5, 3, 7.5, true, "2024-01-01 12:30:00")
    fmt.Println("保存结果：", ok)
}`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `//语法：public 返回类型 方法名(类型 参数名) { return 返回值; }
class Order {
    public string UserName { get; set; }
    public string SpuName { get; set; }
    public double SpuPrice { get; set; }
    public int SpuCount { get; set; }
    public double Total { get; set; }
    public bool Status { get; set; }
    public string CreatedAt { get; set; }
    
    public bool Insert(string userName, string spuName, double spuPrice, int spuCount, double total, bool status, string createdAt) {
        this.UserName = userName;
        this.SpuName = spuName;
        this.SpuPrice = spuPrice;
        this.SpuCount = spuCount;
        this.Total = total;
        this.Status = status;
        this.CreatedAt = createdAt;
        Console.WriteLine("保存订单：" + userName);
        return true;
    }
}

var order = new Order();
bool ok = order.Insert("张三", "牛奶", 2.5, 3, 7.5, true, "2024-01-01 12:30:00");
Console.WriteLine("保存结果：" + ok);`
    }]
  }
}

// static静态
const kpOOPStatic: KnowledgePoint = {
  id: 'kp-oop-static',
  title: 'static静态',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'static：类级别属性/方法，所有对象共享，用于存储全局数据。' },
    { id: 'b2', type: 'tip', content: '静态 vs 非静态：\n• 静态：类名.方法() → Order.selectList()\n• 非静态：对象.方法() → order.insert()' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `//语法：public static 类型 属性名; 访问：类名.属性名  方法：public static 返回类型 方法名() {} 访问：类名.方法名()
import java.util.*;

public class Order {
    public String userName;
    public String spuName;
    public double spuPrice;
    public int spuCount;
    public double total;
    public boolean status;
    public String createdAt;
    public static List<Order> list = new ArrayList<>();
    
    public void insert() {
        Order.list.add(this);
        IO.println("保存订单：" + userName + ", " + spuName);
    }
    
    public static void selectList() {
        for (Order order : Order.list) {
            IO.println("用户：" + order.userName + ", 商品：" + order.spuName + ", 总价：" + order.total + "元");
        }
    }
}

void main() {
    Order order1 = new Order();
    order1.userName = "张三";
    order1.spuName = "牛奶";
    order1.spuPrice = 2.5;
    order1.spuCount = 3;
    order1.total = 7.5;
    order1.status = true;
    order1.createdAt = "2024-01-01 12:30:00";
    order1.insert();
    
    Order order2 = new Order();
    order2.userName = "李四";
    order2.spuName = "面包";
    order2.spuPrice = 5.5;
    order2.spuCount = 2;
    order2.total = 11.0;
    order2.status = false;
    order2.createdAt = "2024-01-01 13:00:00";
    order2.insert();
    
    Order.selectList();
}`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `//语法：public static 类型 属性名; 访问：类名.属性名  方法：public static 返回类型 方法名() {} 访问：类名.方法名()
class Order {
    public string UserName { get; set; }
    public string SpuName { get; set; }
    public double SpuPrice { get; set; }
    public int SpuCount { get; set; }
    public double Total { get; set; }
    public bool Status { get; set; }
    public string CreatedAt { get; set; }
    public static List<Order> list = new List<Order>();
    
    public void Insert() {
        Order.list.Add(this);
        Console.WriteLine("保存订单：" + UserName + ", " + SpuName);
    }
    
    public static void SelectList() {
        foreach (Order order in Order.list) {
            Console.WriteLine("用户：" + order.UserName + ", 商品：" + order.SpuName + ", 总价：" + order.Total + "元");
        }
    }
}

var order1 = new Order {
    UserName = "张三",
    SpuName = "牛奶",
    SpuPrice = 2.5,
    SpuCount = 3,
    Total = 7.5,
    Status = true,
    CreatedAt = "2024-01-01 12:30:00"
};
order1.Insert();

var order2 = new Order {
    UserName = "李四",
    SpuName = "面包",
    SpuPrice = 5.5,
    SpuCount = 2,
    Total = 11.0,
    Status = false,
    CreatedAt = "2024-01-01 13:00:00"
};
order2.Insert();

Order.SelectList();`
    }]
  }
}

// 继承
const kpOOPInherit: KnowledgePoint = {
  id: 'kp-oop-inherit',
  title: '继承',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: 'extends：子类继承父类，拥有父类的属性和方法。' }
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `//语法：public class 子类 extends 父类 {}
import java.util.*;

public class Base<T> {
    public int id;
    public static List list = new ArrayList<>();
    
    public void insert() {
        Base.list.add(this);
    }
    
    public static List selectList() {
        return Base.list;
    }
}

public class Order extends Base<Order> {
    public String userName;
    public String spuName;
    public double spuPrice;
    public int spuCount;
    public double total;
    public boolean status;
    public String createdAt;
}

void main() {
    Order order = new Order();
    order.id = 1;           //继承自Base的id
    order.userName = "张三";
    order.spuName = "牛奶";
    order.spuPrice = 2.5;
    order.spuCount = 3;
    order.total = 7.5;
    order.status = true;
    order.createdAt = "2024-01-01 12:30:00";
    order.insert();
    
    IO.println("订单数：" + Order.selectList().size());
}`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `//语法：class 子类 : 父类 {}
class Base<T> {
    public int id;
    public static List list = new List();
    
    public void Insert() {
        Base.list.Add(this);
    }
    
    public static List SelectList() {
        return Base.list;
    }
}

class Order : Base<Order> {
    public string UserName { get; set; }
    public string SpuName { get; set; }
    public double SpuPrice { get; set; }
    public int SpuCount { get; set; }
    public double Total { get; set; }
    public bool Status { get; set; }
    public string CreatedAt { get; set; }
}

var order = new Order {
    id = 1,           //继承自Base的id
    UserName = "张三",
    SpuName = "牛奶",
    SpuPrice = 2.5,
    SpuCount = 3,
    Total = 7.5,
    Status = true,
    CreatedAt = "2024-01-01 12:30:00"
};
order.Insert();

Console.WriteLine("订单数：" + Order.SelectList().Count);`
    }]
  }
}

// ========== 计算知识点 ==========

// 算术运算知识点
const kpArithmetic: KnowledgePoint = {
  id: 'kp-arithmetic',
  title: '算术运算',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '对数值进行加减乘除运算' },
    { id: 'b2', type: 'table', headers: ['运算符', '含义', '示例', '结果'], rows: [
      ['+', '加法', '1 + 1', '2'],
      ['-', '减法', '2 - 1', '1'],
      ['*', '乘法', '2 * 2', '4'],
      ['/', '除法', '4 / 2', '2']
    ]}
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `IO.println(1 + 1);   // 2
IO.println(2 - 1);   // 1
IO.println(2 * 2);   // 4
IO.println(4 / 2);   // 2`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `console.log(1 + 1)   // 2
console.log(2 - 1)   // 1
console.log(2 * 2)   // 4
console.log(4 / 2)   // 2`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `print(1 + 1)   # 2
print(2 - 1)   # 1
print(2 * 2)   # 4
print(4 / 2)   # 2.0  (Python3除法返回浮点数)`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `fmt.Println(1 + 1)   // 2
fmt.Println(2 - 1)   // 1
fmt.Println(2 * 2)   // 4
fmt.Println(4 / 2)   // 2`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `printf("%d\\n", 1 + 1);   // 2
printf("%d\\n", 2 - 1);   // 1
printf("%d\\n", 2 * 2);   // 4
printf("%d\\n", 4 / 2);   // 2`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `Console.WriteLine(1 + 1);   // 2
Console.WriteLine(2 - 1);   // 1
Console.WriteLine(2 * 2);   // 4
Console.WriteLine(4 / 2);   // 2`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `演示加减乘除四则运算，分别计算：
- 1 + 1
- 2 - 1
- 2 * 2
- 4 / 2
然后输出每个结果`,
      code: `console.log(1 + 1)   // 2
console.log(2 - 1)   // 1
console.log(2 * 2)   // 4
console.log(4 / 2)   // 2`
    }]
  }
}

// 比较运算知识点
const kpComparison: KnowledgePoint = {
  id: 'kp-comparison',
  title: '比较运算',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '><=比较两个数的大小，判断是否满足条件，满足就是true，不满足就是false' },
    { id: 'b2', type: 'table', headers: ['运算符', '含义', '示例', '结果'], rows: [
      ['>', '大于', '5 > 3', 'true(满足)'],
      ['<', '小于', '5 < 3', 'false(不满足)'],
      ['==', '等于', '5 == 3', 'false(不满足)'],
      ['!=', '不等于', '5 != 3', 'true(满足)']
    ]}
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `IO.println(5 > 3);    // true
IO.println(5 < 3);    // false
IO.println(5 == 3);   // false
IO.println(5 != 3);   // true`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `console.log(5 > 3)    // true
console.log(5 < 3)    // false
console.log(5 == 3)   // false
console.log(5 != 3)   // true`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `print(5 > 3)    # True
print(5 < 3)    # False
print(5 == 3)   # False
print(5 != 3)   # True`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `fmt.Println(5 > 3)    // true
fmt.Println(5 < 3)    // false
fmt.Println(5 == 3)   // false
fmt.Println(5 != 3)   // true`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// C语言用1表示true，0表示false
printf("%d\\n", 5 > 3);    // 1 (true)
printf("%d\\n", 5 < 3);    // 0 (false)
printf("%d\\n", 5 == 3);   // 0 (false)
printf("%d\\n", 5 != 3);   // 1 (true)`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `Console.WriteLine(5 > 3);    // True
Console.WriteLine(5 < 3);    // False
Console.WriteLine(5 == 3);   // False
Console.WriteLine(5 != 3);   // True`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `演示比较运算符，分别判断：
- 5是否大于3
- 5是否小于3
- 5是否等于3
- 5是否不等于3
然后输出每个比较的结果`,
      code: `console.log(5 > 3)    // true
console.log(5 < 3)    // false
console.log(5 == 3)   // false
console.log(5 != 3)   // true`
    }]
  }
}

// 逻辑运算知识点
const kpLogical: KnowledgePoint = {
  id: 'kp-logical',
  title: '逻辑运算',
  video: {
    java: 'https://www.w3schools.com/html/mov_bbb.mp4',
    javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
    python: 'https://www.w3schools.com/html/mov_bbb.mp4',
    go: 'https://www.w3schools.com/html/mov_bbb.mp4',
    c: 'https://www.w3schools.com/html/mov_bbb.mp4',
    csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
  },
  blocks: [
    { id: 'b1', type: 'text', content: '将两个比较计算的结果组合起来，进行与或非逻辑运算' },
    { id: 'b2', type: 'table', headers: ['名称', '运算符', '规则', '示例'], rows: [
      ['与 (并且)', '&&', '两边同时满足才为true', '5 > 3 && 2 > 1 // true'],
      ['或 (或者)', '||', '满足一个就为true', '5 > 3 || 1 > 2 // true'],
      ['非 (取反)', '!', 'true变false，false变true', '!(5 > 3) // false']
    ]}
  ],
  codeImpl: {
    java: [{
      id: 'c1',
      filename: 'Main.java',
      code: `// 与：必须同时满足
IO.println(5 > 3 && 2 > 1); // true，两个都为真
IO.println(5 > 3 && 1 > 2); // false，第二个为假

// 或：满足其中一个即可
IO.println(5 > 3 || 1 > 2); // true

// 非：结果取反
IO.println(!(5 > 3));       // false`
    }],
    javascript: [{
      id: 'c1',
      filename: 'main.js',
      code: `// 与：必须同时满足
console.log(5 > 3 && 2 > 1) // true
console.log(5 > 3 && 1 > 2) // false

// 或：满足其中一个即可
console.log(5 > 3 || 1 > 2) // true

// 非：结果取反
console.log(!(5 > 3))       // false`
    }],
    python: [{
      id: 'c1',
      filename: 'main.py',
      code: `# 与：必须同时满足（Python用and）
print(5 > 3 and 2 > 1)  # True
print(5 > 3 and 1 > 2)  # False

# 或：满足其中一个即可（Python用or）
print(5 > 3 or 1 > 2)   # True

# 非：结果取反（Python用not）
print(not (5 > 3))      # False`
    }],
    go: [{
      id: 'c1',
      filename: 'main.go',
      code: `// 与：必须同时满足
fmt.Println(5 > 3 && 2 > 1) // true
fmt.Println(5 > 3 && 1 > 2) // false

// 或：满足其中一个即可
fmt.Println(5 > 3 || 1 > 2) // true

// 非：结果取反
fmt.Println(!(5 > 3))       // false`
    }],
    c: [{
      id: 'c1',
      filename: 'main.c',
      code: `// 与：必须同时满足
printf("%d\\n", 5 > 3 && 2 > 1); // 1 (true)
printf("%d\\n", 5 > 3 && 1 > 2); // 0 (false)

// 或：满足其中一个即可
printf("%d\\n", 5 > 3 || 1 > 2); // 1 (true)

// 非：结果取反
printf("%d\\n", !(5 > 3));       // 0 (false)`
    }],
    csharp: [{
      id: 'c1',
      filename: 'Program.cs',
      code: `// 与：必须同时满足
Console.WriteLine(5 > 3 && 2 > 1); // True
Console.WriteLine(5 > 3 && 1 > 2); // False

// 或：满足其中一个即可
Console.WriteLine(5 > 3 || 1 > 2); // True

// 非：结果取反
Console.WriteLine(!(5 > 3));       // False`
    }],
    ai: [{
      id: 'ai1',
      filename: 'main.js',
      prompt: `演示逻辑运算符：
1. 与运算(&&)：判断 5>3 并且 2>1，再判断 5>3 并且 1>2
2. 或运算(||)：判断 5>3 或者 1>2
3. 非运算(!)：对 5>3 的结果取反
输出每个逻辑运算的结果`,
      code: `// 与：必须同时满足
console.log(5 > 3 && 2 > 1) // true
console.log(5 > 3 && 1 > 2) // false

// 或：满足其中一个即可
console.log(5 > 3 || 1 > 2) // true

// 非：结果取反
console.log(!(5 > 3))       // false`
    }]
  }
}

// ========== 8门课程定义 ==========

// 语言基础课程
const languageBasicCourse: ProgrammingCourse = {
  id: 'lang-basic',
  title: '语言基础',
  icon: '📖',
  chapters: [
    {
      id: 'ch1',
      title: '计算',
      video: {
        java: 'http://gb-code.com/assets/jisuan.webm',
        javascript: 'http://gb-code.com/assets/jisuan.webm',
        python: 'http://gb-code.com/assets/jisuan.webm',
        go: 'http://gb-code.com/assets/jisuan.webm',
        c: 'http://gb-code.com/assets/jisuan.webm',
        csharp: 'http://gb-code.com/assets/jisuan.webm'
      },
      points: [kpArithmetic, kpComparison, kpLogical]
    },
    {
      id: 'ch2',
      title: '存储',
      video: {
        java: 'https://www.w3schools.com/html/mov_bbb.mp4',
        javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
        python: 'https://www.w3schools.com/html/mov_bbb.mp4',
        go: 'https://www.w3schools.com/html/mov_bbb.mp4',
        c: 'https://www.w3schools.com/html/mov_bbb.mp4',
        csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpVariable, kpDataType, kpMap, kpClassObject, kpArray]
    },
    {
      id: 'ch3',
      title: 'if条件分支',
      video: {
        java: 'https://www.w3schools.com/html/mov_bbb.mp4',
        javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
        python: 'https://www.w3schools.com/html/mov_bbb.mp4',
        go: 'https://www.w3schools.com/html/mov_bbb.mp4',
        c: 'https://www.w3schools.com/html/mov_bbb.mp4',
        csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpIf, kpIfElseBasic, kpIfElseIfElse]
    },
    {
      id: 'ch4',
      title: 'for循环',
      video: {
        java: 'https://www.w3schools.com/html/mov_bbb.mp4',
        javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
        python: 'https://www.w3schools.com/html/mov_bbb.mp4',
        go: 'https://www.w3schools.com/html/mov_bbb.mp4',
        c: 'https://www.w3schools.com/html/mov_bbb.mp4',
        csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpForLoop, kpBreak, kpContinue]
    },
    {
      id: 'ch5',
      title: '函数',
      video: {
        javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
        python: 'https://www.w3schools.com/html/mov_bbb.mp4',
        go: 'https://www.w3schools.com/html/mov_bbb.mp4',
        c: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpFunction, kpFunctionParam, kpFunctionReturn]
    },
    {
      id: 'ch6',
      title: '面向对象',
      video: {
        java: 'https://www.w3schools.com/html/mov_bbb.mp4',
        javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
        python: 'https://www.w3schools.com/html/mov_bbb.mp4',
        go: 'https://www.w3schools.com/html/mov_bbb.mp4',
        c: 'https://www.w3schools.com/html/mov_bbb.mp4',
        csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
      },
      points: [kpOOPClassObject, kpOOPMethod, kpOOPThis, kpOOPMethodParamReturn, kpOOPStatic, kpOOPInherit]
    }
  ]
}

// Web基础课程
const webBasicCourse: ProgrammingCourse = {
  id: 'web-basic',
  title: 'Web基础',
  icon: '🌐',
  chapters: [{
    id: 'ch1',
    title: 'HTTP基础',
    video: {
      java: 'https://www.w3schools.com/html/mov_bbb.mp4',
      javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
      python: 'https://www.w3schools.com/html/mov_bbb.mp4',
      go: 'https://www.w3schools.com/html/mov_bbb.mp4',
      c: 'https://www.w3schools.com/html/mov_bbb.mp4',
      csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    points: [{
      id: 'kp-http-intro',
      title: 'HTTP协议',
      blocks: [
        { id: 'b1', type: 'text', content: 'HTTP：超文本传输协议，Web通信的基础。' },
        { id: 'b2', type: 'list', items: ['GET：获取数据', 'POST：提交数据', 'PUT：更新数据', 'DELETE：删除数据'] }
      ]
    }]
  }]
}

// 数据库基础课程
const dbBasicCourse: ProgrammingCourse = {
  id: 'db-basic',
  title: '数据库基础',
  icon: '🗄️',
  chapters: [{
    id: 'ch1',
    title: 'SQL基础',
    video: {
      java: 'https://www.w3schools.com/html/mov_bbb.mp4',
      javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
      python: 'https://www.w3schools.com/html/mov_bbb.mp4',
      go: 'https://www.w3schools.com/html/mov_bbb.mp4',
      c: 'https://www.w3schools.com/html/mov_bbb.mp4',
      csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    points: [{
      id: 'kp-sql-intro',
      title: 'SQL入门',
      blocks: [
        { id: 'b1', type: 'text', content: 'SQL：结构化查询语言，用于操作数据库。' },
        { id: 'b2', type: 'code', language: 'sql', filename: 'query.sql', code: '-- 查询所有用户\nSELECT * FROM user;\n\n-- 条件查询\nSELECT * FROM user WHERE age > 18;' }
      ]
    }]
  }]
}

// 基础项目课程
const projectBasicCourse: ProgrammingCourse = {
  id: 'project-basic',
  title: '基础项目',
  icon: '🚀',
  chapters: [{
    id: 'ch1',
    title: '商城项目',
    video: {
      java: 'https://www.w3schools.com/html/mov_bbb.mp4',
      javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
      python: 'https://www.w3schools.com/html/mov_bbb.mp4',
      go: 'https://www.w3schools.com/html/mov_bbb.mp4',
      c: 'https://www.w3schools.com/html/mov_bbb.mp4',
      csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    points: [{
      id: 'kp-project-intro',
      title: '项目介绍',
      blocks: [
        { id: 'b1', type: 'text', content: '实战项目：从零搭建一个电商系统。' },
        { id: 'b2', type: 'list', items: ['用户登录注册', '商品列表展示', '购物车功能', '订单管理'] }
      ]
    }]
  }]
}

// 语言进阶课程
const languageAdvancedCourse: ProgrammingCourse = {
  id: 'lang-advanced',
  title: '语言进阶',
  icon: '📚',
  chapters: [{
    id: 'ch1',
    title: '进阶特性',
    video: {
      java: 'https://www.w3schools.com/html/mov_bbb.mp4',
      javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
      python: 'https://www.w3schools.com/html/mov_bbb.mp4',
      go: 'https://www.w3schools.com/html/mov_bbb.mp4',
      c: 'https://www.w3schools.com/html/mov_bbb.mp4',
      csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    points: [{
      id: 'kp-advanced-intro',
      title: '进阶概述',
      blocks: [
        { id: 'b1', type: 'text', content: '深入学习语言高级特性和最佳实践。' }
      ]
    }]
  }]
}

// Web进阶课程
const webAdvancedCourse: ProgrammingCourse = {
  id: 'web-advanced',
  title: 'Web进阶',
  icon: '🔥',
  chapters: [{
    id: 'ch1',
    title: '框架入门',
    video: {
      java: 'https://www.w3schools.com/html/mov_bbb.mp4',
      javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
      python: 'https://www.w3schools.com/html/mov_bbb.mp4',
      go: 'https://www.w3schools.com/html/mov_bbb.mp4',
      c: 'https://www.w3schools.com/html/mov_bbb.mp4',
      csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    points: [{
      id: 'kp-framework-intro',
      title: '框架概述',
      blocks: [
        { id: 'b1', type: 'text', content: '学习主流Web框架，提升开发效率。' }
      ]
    }]
  }]
}

// 数据库进阶课程
const dbAdvancedCourse: ProgrammingCourse = {
  id: 'db-advanced',
  title: '数据库进阶',
  icon: '⚡',
  chapters: [{
    id: 'ch1',
    title: '性能优化',
    video: {
      java: 'https://www.w3schools.com/html/mov_bbb.mp4',
      javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
      python: 'https://www.w3schools.com/html/mov_bbb.mp4',
      go: 'https://www.w3schools.com/html/mov_bbb.mp4',
      c: 'https://www.w3schools.com/html/mov_bbb.mp4',
      csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    points: [{
      id: 'kp-db-optimize',
      title: '索引优化',
      blocks: [
        { id: 'b1', type: 'text', content: '学习数据库索引原理和优化技巧。' }
      ]
    }]
  }]
}

// 进阶项目课程
const projectAdvancedCourse: ProgrammingCourse = {
  id: 'project-advanced',
  title: '进阶项目',
  icon: '🏆',
  chapters: [{
    id: 'ch1',
    title: '分布式系统',
    video: {
      java: 'https://www.w3schools.com/html/mov_bbb.mp4',
      javascript: 'https://www.w3schools.com/html/mov_bbb.mp4',
      python: 'https://www.w3schools.com/html/mov_bbb.mp4',
      go: 'https://www.w3schools.com/html/mov_bbb.mp4',
      c: 'https://www.w3schools.com/html/mov_bbb.mp4',
      csharp: 'https://www.w3schools.com/html/mov_bbb.mp4'
    },
    points: [{
      id: 'kp-distributed-intro',
      title: '分布式入门',
      blocks: [
        { id: 'b1', type: 'text', content: '学习微服务架构和分布式系统设计。' }
      ]
    }]
  }]
}

// ========== 后端课程组（8门课程） ==========

// 后端课程（按语言分组）
export const backendCourseGroups: LanguageCourseGroup[] = [
  {
    id: 'java',
    title: 'Java',
    courses: [languageBasicCourse, webBasicCourse, dbBasicCourse, projectBasicCourse, languageAdvancedCourse, webAdvancedCourse, dbAdvancedCourse, projectAdvancedCourse]
  },
  {
    id: 'javascript',
    title: 'JavaScript',
    courses: [languageBasicCourse, webBasicCourse, dbBasicCourse, projectBasicCourse, languageAdvancedCourse, webAdvancedCourse, dbAdvancedCourse, projectAdvancedCourse]
  },
  {
    id: 'python',
    title: 'Python',
    courses: [languageBasicCourse, webBasicCourse, dbBasicCourse, projectBasicCourse, languageAdvancedCourse, webAdvancedCourse, dbAdvancedCourse, projectAdvancedCourse]
  },
  {
    id: 'go',
    title: 'Go',
    courses: [languageBasicCourse, webBasicCourse, dbBasicCourse, projectBasicCourse, languageAdvancedCourse, webAdvancedCourse, dbAdvancedCourse, projectAdvancedCourse]
  },
  {
    id: 'c',
    title: 'C',
    courses: [languageBasicCourse, webBasicCourse, dbBasicCourse, projectBasicCourse, languageAdvancedCourse, webAdvancedCourse, dbAdvancedCourse, projectAdvancedCourse]
  },
  {
    id: 'csharp',
    title: 'C#',
    courses: [languageBasicCourse, webBasicCourse, dbBasicCourse, projectBasicCourse, languageAdvancedCourse, webAdvancedCourse, dbAdvancedCourse, projectAdvancedCourse]
  }
]

