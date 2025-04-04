// 현재 디렉토리에 ./test2/test3/test4 라는 디렉토리가 있는지 검사하고,
// 존재하지 않는 경우 디렉토리를 만드세요.

fs = require('fs');


if (fs.existsSync('./test2/test3/test4')) {
    console.log('folder already exists');
} else {
    fs.mkdir('./test2/test3/test4', { recursive: true }, (err) => {
        if (err) {
            return console.error(err);
        }
        console.log('folder created');
    });
}