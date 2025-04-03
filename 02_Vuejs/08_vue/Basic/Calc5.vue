<!-- 문제 (page 11): Calc5 컴포넌트를 다음처럼 정의하고, 필요한 경우 코드를 완성하세요. 
o x의 값이 변결될 때마다,
o 이전 값과 새로운 값을 브라우저 콘솔에 출력함.
-->

<template>
    <div>
        X: <input type="text" v-model.number="state.x"><br/>
        <div>결과: {{ result }}</div>
    </div>
</template>

<script>
import { watch, ref } from 'vue'

export default {
    name: "Calc5",
    setup(){
        const x = ref(0);
        const result = ref(0)

        watch(x, (current, old) => {
            console.log(`${old} ==> ${current}`)
            result.value = current*2;
        })
        return {x, result}
    }
}
</script>
