// 다음과 같이 출력되도록 아래 코드에서 출력할 문자열을 리터럴 템플릿으로 정의하세요.
// o 홍길동 님에게 Mon Jan 15 2024에 연락했다.
// o 갤럭시 S7의 가격은
//          199000원 입니다.


const d1 = new Date ();
let name = "홍길동";
let r1 = `${name}님에게 ${d1.toDateString()}에 연락했다.`


let product = "갤럭시 S7";
let price = 199000;
let str = `${product}의 가격은
           ${price}원 입니다.`;


console.log(str);