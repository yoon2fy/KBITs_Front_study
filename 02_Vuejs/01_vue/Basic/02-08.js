// 다음이 출력되도록 각 함수의 매개변수를 선언하세요.
// o addContact() 함수의 빈칸을 채우세요.

function addContact1({name, phone, email="이메일 없음", age=0}){
    console.log(name, phone, email, age);
}
addContact1({name: "이몽룡", phone: "010-0000-0000"}) 

function addContact2(contact){
    if(!contact.email) contact.email = "이메일 없음";
    if(!contact.age)   contact.age   = 0;
    let {name, phone, email, age} = contact;
    console.log(name, phone, email, age);
}
addContact2({name: "이몽룡", phone: "010-0000-0001"})


function addContact3(name, phone, email="이메일 없음", age=0){
    console.log(name, phone, email, age)
}
addContact3("이몽룡", "010-0000-0002")