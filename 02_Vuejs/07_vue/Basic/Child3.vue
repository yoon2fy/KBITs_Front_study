<!-- 문제 (6 page): Child3.vue의 <style>을 module로 설정한 경우 다음 코드를 완성하세요. -->
<template>
    <div :class="$style.child">
    <h2>Child3</h2>
    </div>
</template>
<script>
    export default {
    name: 'Child3',
    };
</script>

<style module>
    .child {
        background-color: orange;
        border: solid 1px black;
        margin: 1.5em;
        padding: 1em;
    }
</style>
