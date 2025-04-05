<!-- 
10_vue(심화1)
o App.vue를 axios를 이용해 /api/todos/1를 요청하고,
o 그 결과를 콘솔에 출력하세요.
-->

<template>
<div>
    <h2>콘솔을 확인합니다.</h2>
</div>
</template>

<script setup>
import axios from 'axios'
const requestAPI = () => {
    const url = "/api/todos/1";
    axios.get(url).then((response) => {
        console.log("# 응답객체 : ", response);
    });
};

requestAPI();
</script>







