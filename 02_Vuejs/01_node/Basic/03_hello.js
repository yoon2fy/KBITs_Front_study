// 방법 2번
function hello(name='guest'){            // 매개변수의 기본값을 설정한 경우
    return name + '님, 안녕하세요?'
}

const name = hello();

console.log(name);