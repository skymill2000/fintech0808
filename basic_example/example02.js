// 안씁니다
function plus(p1, p2) {
  return p1 + p2;
}
console.log(plus(3, 9));
// 안쓸거에요

const arrowPlus = (p1, p2) => {
  return p1 + p2;
};

console.log(arrowPlus(3, 9));
//work01 : Arrow Func으로 minus 기능, mul 곱하기 기능, div 나누기 기능을 구현

const minus = (p1, p2) => {
  return p1 - p2;
};

const mul = (p1, p2) => {
  return p1 * p2;
};

const div = (p1, p2) => {
  return p1 / p2;
};

console.log(plus(5, 2));
console.log(minus(5, 2));
console.log(mul(5, 2));
console.log(div(5, 2));
