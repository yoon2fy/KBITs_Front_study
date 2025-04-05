// 전개연산자를 사용하여 obj1의 기본값을 obj2로 복사한 후,
// email의 값을 mspark@gmail.com으로 변경하세요.


let obj1 = { name: "박문수", age: 29 };
let obj2 = { ...obj1, email:"mspark@gmail.com" };
console.log(obj2)
