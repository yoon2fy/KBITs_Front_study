// 홀수 짝수 구별하는 프로그램
// 양의 정수만 입력 받기

let num = -21;

if (num % 2 == 0 && num > 0) {
  console.log('짝수입니다.');
} else if (num % 2 != 0 && num > 0) {
  console.log('홀수입니다.');
} else {
  console.log('양수만 입력가능합니다.');
}

// if (num % 2 == 1) {
//   console.log('홀수입니다.');
// }
