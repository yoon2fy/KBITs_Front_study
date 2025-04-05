// node_02(심화)
// o 데이터가 준비되면 콘솔에 출력함.
// o 읽기 작업이 끝나면 끝났음을 출력함.
// o 에러 처리, 코드로 포함.

const fs = require('fs');

const rs = fs.createReadStream('./readMe.txt');

rs.on('data', (chunk) => {
    console.log('첫 번째 답입니다.')
    console.log('new chunk received:');
    console.log(chunk.length, chunk);
    console.log('=============================')

})

.on('end', () => { 
    console.log('두 번째 답입니다.')
    console.log('finished reading data');
    console.log('=============================')
})

.on('error', (err) => { 
    console.log('세 번째 답입니다.')
    console.error(`Error reading the file: ${err}`);
    console.log('=============================')
});