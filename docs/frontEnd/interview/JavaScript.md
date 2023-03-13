# JS

### 基本数据类型和复杂数据类型
+ 基本数据类型： undefined, null, boolean, Number, String, Symbol(ES6),BigInt(ES10
    
+ 复杂数据类型（引用数据类型）：对象，数组，函数  

### 堆内存和栈内存
操作系统中内存被分为栈区和堆区
栈区内存由编译器自动分配释放  
堆区内存由程序员分配释放

### 判断数据类型
1. typeof: 可判断基本数据类型，基本数据类型中的null返回Object, 引用数据类型除了function一律返回Object
2. instanceof: A instanceof B 检测的是原型，必须已知类型
3. Object.prototype.toString.call( content )
4. constructor属性

### null和undefined的区别
undefined:声明了一个变量但未对其初始化
```js
var data
console.log(data === undefined) //true
```

null: 表示是空值，非原始状态。用于赋值给一些可能会返回对象的变量，作为初始化

```js
null == null //true
null === null //true
null == undefined // true
null === undefined //false
undefined == undefined //true
undefined === undefined //true
```

### new运算符
new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象的实例。
```js
new constructor[([arguments])]
constructor
// 一个指定对象实例的类型的类或函数。

arguments
// 一个用于被 constructor 调用的参数列表。
```
步骤：
1. 创建一个空的js对象{}
2. 为对象添加属性__proto__，将该属性链接至构造函数的原型函数
3. 将{__proto__:}作为this的上下文
4. 如果该函数没有返回对象则返回this

### Object.create(null)和{}的区别
var obj = Object.create(null);
var obj1 = {}
var obj2 = new Object()
通过 Object.create(null) 创建的对象是不继承Object原型链上的属性，如tostring()方法这些 
通过{}创建的对象和new Object()的方式是一样的，都会继承Object对象的所有属性


### 实现sleep函数
```js
const sleep = time => {
  return new Promise(resolve => {
    setTimeout(resolve,time)
  })
}

var start = new Date().getTime()
sleep(2000).then(()=>{
  console.log(1)
  var end = new Date().getTime()
  console.log(end-start + 'ms')
})
```

```js
function sleep(time) {
  return new Promise(resolve => {
    setTimeout(resolve, time)
  })
}

var start = new Date().getTime()
async function output(){
  await sleep(2000)
  var end = new Date().getTime()
  console.log(end-start + 'ms')
}
output()
```

```js
function sleep(callback,time) {
  setTimeout(callback,time);
}
const start = new Date().getTime();

function output() {
  console.log(111);
  const end = new Date().getTime();
  console.log(`${end - start} ms`); // 2006 ms
}

sleep(output,2000)
```

### JS原型，原型链
每一个函数都有prototype属性，这个属性是一个指针，指向一个对象。这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。  

#### constructor属性
当函数创建，prototype 属性指向一个原型对象时，在默认情况下，这个原型对象将会获得一个 constructor 属性，这个属性是一个指针，指向 prototype 所在的函数对象。


### JS获取原型的方法
+ `p.__proto__` 非规范
+ p.constructor.prototype
+ Object.getPrototypeOf(p)

### ==操作符的强制类型转换规则
1. 字符串和数字之间的相等比较，将字符串转为数字之后比较
2. 其他类型与布尔类型比较，先将布尔值转换为数字后，再应用其他规则进行比较

### this 对象
this是执行上下文中的一个属性，只想最后一次调用这个方法的对象


### JS中的执行上下文（Execution Context）
JS是描述型脚本语言，无需编译成中间语言，由JS引擎动态解析和执行。  
JavaScript 引擎在执行一段可执行代码之前，会先进行准备工作，也就是**对这段代码进行解析**（也可以称为预处理）。这个阶段会**根据可执行代码创建相应的执行上下文**（ Execution Context ），也就是做声明提升等工作（后边会详细讲解）。然后在代码解析完成后才开始代码的执行。

#### 可执行代码的分类
1. 全局执行代码，在执行所有代码前，解析创建全局执行上下文
2. 函数执行代码，执行函数前，解析创建函数上下文
3. eval执行代码，运行于当前执行上下文中
   

#### 执行上下文的组成
变量对象（Variable object,VO) + 作用域链（Scope Chain） + this  
变量对象：与执行上下文相关的数据作用域，存储了在执行上下文中定义的所有变量和函数声明，保证代码执行时对变量和函数的正确访问。  
存储函数所有形参/函数声明/变量声明



##### 变量对象
可执行上下文分为两种：全局执行上下文和函数执行上下文  
变量对象也可分为两种：全局上下文变量对象和函数上下文变量对象
全局上下文变量对象（GlobalContextVO）:等于全局对象 VO === this === global
函数上下文变量对象FunctionContextVO，等同于活动对象（Active object，AO）(VO === AO, 并且添加了`<arguments>`和`<formal parameters>`)  

AO包含：
callee — 指向当前函数的引用
length — 真正传递的参数个数
properties-indexes (字符串类型的整数) 属性的值就是函数的参数值(按参数列表从左到右排列)

#### 作用域链
当代码在一个环境中执行时，会创建变量对象的一个作用域链。作用域链的用途是保证对执行环境有权访问的所有变量和函数的有序访问。  

#### this指向
this指向最后一次调用这个方法的对象。
有四种调用方式：方法调用模式、函数调用模式、构造器调用模式和 apply 、 call 、 bind 调用模式。  
##### 方法调用模式
```js
var myObjct = {
    value: 1,
    increment: function(){
        this.value++;
        //this指向调用它的对象
    }
}

myObjct.increment(); // myObject 调用 increment() 方法，this 指向 myObject 对象 

console.log(mvObject.value); // 2
```

##### 函数调用模式
```js
var value = 1;

increment(); // 作为函数调用， this 绑定到全局对象

console.log(value); // 2

function increment(){
    this.value++;
}
```

##### 构造器调用模式
如果在一个函数前面带上 new 调用，那么背地里将会创建一个连接到该函数的 prototype 成员的新对象，同时 this 也会被绑定到那个新对象上。
```js
var peo = new person("xiao ming"); // this 绑定到 peo 对象

console.log(peo.name); // "xiao ming"

function person(name){
    this.name = name;
}
```


##### apply,call和bind调用模式
这三个方法用途都是在特定的作用域中调用函数，简单说就是用于指定函数调用时 this 指向的对象。下面我们分别来讲讲它们用法的不同。  
其中 apply 方法接收两个参数：一个是 this 绑定的对象，一个是参数数组。call 方法接收的参数，第一个是 this 绑定的对象，后面的其余参数是传入函数执行的参数。也就是说，在使用 call() 方法时，传递给函数的参数必须逐个列举出来。bind 方法通过传入一个对象，返回一个 this 绑定了传入对象的新函数。这个函数的 this 指向除了使用 new 时会被改变，其他情况下都不会改变。