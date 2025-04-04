// example.txt의 내용을 읽어 화면에 출력하세요 ( 비동기함수로 처리)

// 비동기 함수
fs = require('fs');

fs.readFile('./example.txt', 'utf 8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});