<!-- 예제 07-04 -->
<template>
    <li><input type="checkbox" :checked="checked"/> {{ name }} </li>
</template>

<script>
    export default {
        name: "CheckboxItem",
        props: ["name", "checked"],
    }
</script>


