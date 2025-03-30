// 다음 결과가 나오도록 foodReport 함수를 작성하세요.
// o 음식 목록은 가변 파라미터로 처리함 (...를 하려고함.)

function foodReport(name, age, ... favoriteFoods){
    console.log(name + ", " + age);
    console.log(favoriteFoods);
}

foodReport("이몽룡", 20, "짜장면", "냉면", "불고기");
foodReport("홍길동", 16, "초밥")