// 앞의 example.txt를 읽어서 text-1.txt로 저장하세요
// o 동기 함수로 작성하세요.


fs = require('fs');

const data = fs.readFileSync ('./example.txt', 'uft8');
fs.writeFileSync('./text 1.txt', data);