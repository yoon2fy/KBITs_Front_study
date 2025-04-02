<!-- 문제(10 page) NoSlotTest 컴포넌트를 다음과 같이 정의하세요. 필요한 경우 코드를 완성하세요. -->
<template>
    <div>
    <h3>당신이 경험한 프론트 엔드 기술은? (첫번째 :Slot 사용 (X))</h3>
    <CheckBox1 v-for="item in items" :key="item.id" :id="item.id" :label="item.label"
               :checked="item.checked" @check-changed="CheckBoxChanged">
    </CheckBox1>
    </div>
</template>

<script>
import CheckBox1 from './CheckBox1.vue';

export default {
    name : "NoSlotTest",
    components : { CheckBox1 },
    data() {
        return {
            items : [
                {id:"V", checked:true , label:"Vue"},
                {id:"A", checked:false , label:"Angular"},
                {id:"R", checked:false , label:"React"},
                {id:"S", checked:false , label:"Svelte"},
            ]
        }
    },
    
    methods : {
        CheckBoxChanged(e) {
            let item = this.items.find ((item)=> item.id === e.id);
            e.item.checked= e.checked;
        }
    }
}
</script>
<style></style>