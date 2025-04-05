// 앞의 코드를 async/await 코드로 변경하시오.

async function init() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const users = await response.json();
        console.log(users);
    } catch (err) {
        console.error(err);
    }
}

init();