<!-- 예제 07-11 -->
<template>
    <li><input type="checkbox" :checked="idol.checked"/> {{ idol.name }} </li>
</template>

<script>
    export default {
        name: "CheckboxItem2",
        props: {
            id: [Number, String],
            name: String,
            checked: {
                type: Boolean,
                default: false,
                required: false
            }
        }
    }
</script>


