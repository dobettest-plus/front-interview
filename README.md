# 什么是BFC,有哪些特性,触发的条件有哪些?

# css选择器有哪些，样式的优先级是如何排列的,权重如果一样,按照什么规则应用样式

# 说出以下代码的运行结果;js中有哪些方法属于宏任务，哪些属于微任务

```js
async function async1() {
  console.log("async1 start");
  await async2();
  console.log("async1 end");
}
async function async2() {
  console.log("async2");
}
console.log("script start");
setTimeout(function () {
  console.log("setTimeout");
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");
  resolve();
}).then(function () {
  console.log("promise2");
});
console.log("script end");
```
# 从输入url到页面渲染，浏览器经历了哪些流程

# js中对象是如何实现继承的和es6的class继承方式有什么区别


# 根据要求补充webpack.config.js文件
技术栈为react,less,es6,静态资源有字体文件和svg文件,注意考虑一些性能优化
# 完成以下算法题

https://leetcode.cn/problems/intersection-of-two-linked-lists/
https://leetcode.cn/problems/longest-substring-without-repeating-characters/
