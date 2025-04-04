// 앞의 example.txt를 읽어서 text-1.txt로 저장하세요
// o 비동기 함수로 작성하세요.


fs = require('fs');

fs.readFile('./example.txt', 'utf8', (err, data) => {
    if (err) {
        console.log(err);
    }
    
    fs.writeFile('./text-2.txt', data, (err) => {
        if (err) {
            console.log(err);
        }
        
        console.log('text-2.txt is saved!');
    });
});