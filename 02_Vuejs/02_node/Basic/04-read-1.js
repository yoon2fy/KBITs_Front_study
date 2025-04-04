// example.txt의 내용을 읽어 화면에 출력하세요 (동기함수로 처리)



fs = require('fs');

const data = fs.readFileSync ('./example.txt');
console.log(data);