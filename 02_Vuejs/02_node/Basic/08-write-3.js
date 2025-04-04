// 앞의 example.txt 를 읽어서 text 1.txt 로 저장하는데,
// 기존에 text 1.txt 가 존재하면 파일이 존재한다고 출력하고,
// 존재하지 않는 경우에만 작성하세요.  (동기 함수 사용)(


fs = require('fs');

const data = fs.readFileSync('./example.txt', 'uft8');

if (fs.existSync('text-1.txt')) {   // (조건) text-1.txt 파일이 있다.
    console.log('file already exist');
    } else {
        fs.writeFileSync('./text-1.txt', data);
    }

