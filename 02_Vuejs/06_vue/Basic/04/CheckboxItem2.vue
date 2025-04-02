<!-- 예제 07-09 -->
<template>
    <li><input type="checkbox" :checked="idol.checked"/> {{ idol.name }} </li>
</template>

<script>
    export default {
        name: "CheckboxItem2",
        props: ["idol"],    // props 속성으로 전달받을 idol 속성을 정의하기
    }
</script>


