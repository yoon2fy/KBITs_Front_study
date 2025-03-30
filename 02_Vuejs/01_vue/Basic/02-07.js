// 배열의 구조 분해를 이용해 다음 변수들을 설정하세요.
// o a1, a2, a3, n, a, gender 변수

let arr = [10,20,30,40];
let [a1, a2, a3] = arr; // 밑줄 부분 (1)
console.log(a1, a2, a3);

let p1 = { name:"홍길동", age:20, gender:"M" };
let {name:n, age:a, gender} = p1; // 밑줄 부분(2)
console.log(n, a, gender);