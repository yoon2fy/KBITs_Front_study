// node_02(심화2)
// 현재 디렉토리의 항목을 읽어서 출력하세요.
// o promise가 적용된 모듈을 이용하기.
// o 에러 처리 코드를 포함하기.

const fs = require('fs').promises;

fs.readdir('./')
.then((result) => console.log(result))
.catch((err) => console.error(err));