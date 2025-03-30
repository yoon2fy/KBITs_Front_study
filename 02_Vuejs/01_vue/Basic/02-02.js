// 다음 코드의 실행 결과를 적으세요.
// 실제 결과를 확인하세요.

let msg = "GLOBAL";
function outer(){
    let msg = "OUTER";
    console.log(msg);
    if(true){
        let msg = "BLOCK";
        console.log(msg);
    }
}
outer()