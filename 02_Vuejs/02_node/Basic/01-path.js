console.clear();
// ============================================================================
// 문제 1
// path 내장 모듈을 이용하여 경로 요소 'some', 'work', 'ex.txt'를 결합하세요.

const path = require('path');

// 경로 연결하기
const fullPath = path.join('some', 'work', 'ex.txt');

console.log('-----------------------')
console.log('첫 번째 문제의 답입니다.')
console.log(fullPath);

// ============================================================================
// 문제 2
// 위의 파일에서 현재 파일의 전체 절대경로와 디렉토리 경로를 출력하도록 확장하세요.

console.log('-----------------------')
console.log('두 번째 문제의 답입니다.')
console.log(`현재파일 전체 절대경로: ${__filename}`);

const dir = path.dirname(__filename);
console.log(`디렉토리경로: ${dir}`);


// ============================================================================
// 문제 3
// 위의 파일에서 현재 파일의 파일명(확장명 포함)과 확장명을 제외한 파일명을 출력하도록 확장하세요.
console.log('-----------------------')
console.log('세 번째 문제의 답입니다.')

const fn = path.basename(__filename);
console.log(`파일 이름(확장명 포함): ${fn}`);

const fn2 = path.basename(__filename, '.js');
console.log(`파일 이름(확장자 제외): ${fn2}`);


// ============================================================================
// 문제 4
// 위의 파일에서 현재 파일의 확장명을 출력하도록 확장하세요.
console.log('-----------------------')
console.log('네 번째 문제의 답입니다.')

const ext = path.extname(__filename);
console.log(`현재 파일의 확장명: ${ext}`)

// ============================================================================
// 문제 5
// 위의 파일에서 현재 파일의 경로 요소 전체를 출력하도록 확장하세요.
console.log('-----------------------')
console.log('다섯 번째 문제의 답입니다.')

const parsedPath = path.parse(__filename);
console.log(parsedPath);