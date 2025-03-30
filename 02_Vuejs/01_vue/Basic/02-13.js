// 다음 코드의 실행 결과를 적으세요. 실제 실행 결과를 확인하세요.

let obj = {result: 0};

obj.add = function(x,y){
    function inner(){
        this.result = x+y;
    }
    inner();
}

obj.add(3,4)

console.log(obj)
console.log(result) // {results:7}