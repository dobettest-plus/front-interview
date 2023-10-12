// 原始 list 如下
let list = [
  { id: 1, name: "部门A", parentId: 0 },
  { id: 2, name: "部门B", parentId: 0 },
  { id: 3, name: "部门C", parentId: 1 },
  { id: 4, name: "部门D", parentId: 1 },
  { id: 5, name: "部门E", parentId: 2 },
  { id: 6, name: "部门F", parentId: 3 },
  { id: 7, name: "部门G", parentId: 2 },
  { id: 8, name: "部门H", parentId: 4 },
];

// 转换后的结果data.json所示

function convert(list) {
}
async function async1() {
  console.log("async1 start");//2
  await async2();
  console.log("async1 end");//4
}
async function async2() {
  console.log("async2");//3
}
console.log("script start");//1
setTimeout(function () {
  console.log("setTimeout");//8
}, 0);
async1();
new Promise(function (resolve) {
  console.log("promise1");//5
  resolve();
}).then(function () {
  console.log("promise2");//7
});
console.log("script end");//6