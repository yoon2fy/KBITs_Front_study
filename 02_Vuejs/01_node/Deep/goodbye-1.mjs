
function hi(name) {
    console.log(`${name}님, 안녕하세요?`);
}

function goodbye(name) {
    console.log(`${name}님, 안녕히 가세요.`);
}

export { hi as hello, goodbye as bye };