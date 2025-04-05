// Promise를 이용해서 비동기로 '피자를 주문했습니다.'를 출력.
// o 에러가 있는 경우 '피자를 주문하지 않습니다.'를 출력.
let likePizza = true;

const pizza = new Promise((resolve, reject) => {
    if (likePizza){
        resolve('피자를 주문했습니다.');
    } else {
        reject('피자를 주문하지 않습니다.');
    }
});

pizza
    .then((result) => console.log(result))
    .catch((err) => console.log(err));