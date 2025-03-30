// 다음 출력 결과가 나오도록 addContact()함수를 완성하세요.
// o 매개변수가 생략된 경우 기본값은 "없음"
// o 출력할 문자열은 템플릿 문자열로 구성함

function addContact(name, mobile, home="없음", address="없음", email="없음"){
    let str = `name=${name}, mobile=${mobile}, home=${home},
               address=${address}, email=${email}`;
    console.log(str);
}

addContact("홍길동", "010-222-3331");
addContact("이몽룡", "010-222-3331", "02-3422-9900", "서울시");