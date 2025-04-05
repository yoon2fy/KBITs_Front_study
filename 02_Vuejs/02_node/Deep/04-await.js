// node_02(심화2)
// 앞에서 작성한 코드를 async/await를 이용해서 다시 작성하시오.
// o 에러 처리 코드를 포함하기.

const fs = require('fs').promises;
async function readDirAsyn() {
    try {
        const files = await fs.readdir('./');
        console.log(files);
    } catch (err) {
        console.error(err);
    }
}

readDirAsyn();