// node_02(심화)
// o 앞에서 준비한 readMe.txt를
//   스트림과 파이프를 이용해서
//   writeMe.txt로 복사하시오.


const fs = require('fs');

const rs = fs.createReadStream('./readMe.txt', 'utf8');
const ws = fs.createWriteStream('./writeMe.txt');
rs.pipe(ws);