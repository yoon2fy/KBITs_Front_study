// 1 번째 방법
var getTriangle = function(base, height){
    return (base * height)/2;
};

console.log('삼각형의 면적: ' + getTriangle(5, 2));

// var를 요즘 안쓰는 이유: '호 이스 팅'  때문에 그럼

// 2 번째 방법
let getTriangle2 = (base, height) => {
    return (base*height)/2;
}

console.log('삼각형의 면적: ' + getTriangle2(5,2));


// 3 번째 방법
let getTriangle3 = (base, height) => (base*height)/2;

console.log('삼각형의 면적: ' + getTriangle3(5,2));