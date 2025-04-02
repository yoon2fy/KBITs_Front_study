<!-- 문제 (page 9): Calc4 컴포넌트를 다음처럼 정의하고, 필요한 경우 코드를 완성하세요. 
o 버튼을 제거하고,
o x, y 값을 입력한 경우 자동으로 결과가 계산됨  ===> 계산된 속성을 사용하기 !
-->

<template>
    <div>
        X: <input type="text" v-model.number="state.x"><br/>
        Y: <input type="text" v-model.number="state.y"><br/>
        <div>결과: {{ result }}</div>
    </div>
</template>

<script>
import { reactive, computed } from 'vue'

export default {
    name: "Calc4",
    setup(){
        const state = reactive({x:10, y:20})
        const result = computed(()=>{
            return state.x + state.y;
        })
        return {result, state}
    }
}
</script>
