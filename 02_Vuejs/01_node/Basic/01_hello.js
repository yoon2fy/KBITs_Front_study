const c = require('ansi-colors');


// 방법 1번
function hello(name){
    console.log(c.green(name) + "님, 안녕하세요?")
};

hello("홍길동");





// // 방법 2번
// function hello2(name){
//     console.log(`${name}님, 안녕하세요?`)
// }

// hello2("홍길동");


// // 방법 3번
// let