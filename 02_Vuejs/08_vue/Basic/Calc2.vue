<!-- 문제 (page 5): Calc2 컴포넌트를 다음처럼 정의하고, 필요한 경우 코드를 완성하세요. -->

<template>
    <div>
        X: <input type="text" v-model.number="x"><br/>
        Y: <input type="text" v-model.number="y"><br/>
        <button @click="calcAdd">계산</button><br/>
        <div>결과: {{ result }}</div>
    </div>
</template>

<script>
import { ref } from 'vue'

export default {
    name: "Calc2",
    setup(){
        const x = ref(10);
        const y = ref(20);
        const result = ref(30);

        const calcAdd = () => {
            result.value = x.value + y.value;
        }
        return {x, y, result, calcAdd}

    }
}

</script>
