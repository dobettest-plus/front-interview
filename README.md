# 什么是BFC?
# css选择器有哪些，请按照优先级排列
# 说出以下代码的运行结果

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

# 根据要求补充webpack.config.js文件
技术栈为react,less,es6,静态资源有字体文件和svg文件,注意考虑一些性能优化
# 完成以下算法题

https://leetcode.cn/problems/intersection-of-two-linked-lists/
https://leetcode.cn/problems/longest-substring-without-repeating-characters/
