// 다음과 같이 출력되도록 아래 코드에서 Promise 객체를 완성하세요.

const p = new Promise((resolve, reject) => {
    setTimeout(()=> {
        let num = Math.random();
        if (num >= 0.8) {
            reject("생성된 숫자가 0.8이상임- " + num);
        }
        resolve(num);
    }, 2000)
})
p.then((result)=> {
    console.log("처리 결과 : ", result)
})
.catch((error)=>{
    console.log("오류 : ", error)
})


console.log("## Promise 객체 생성!");