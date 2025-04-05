<!-- 
10_vue(심화2)
o 다음 데이터를 추가하도록 App4.vue를 작성하고, 확인하세요.

let data = { todo: "윗몸일으키기 3세트", desc: "너무 빠르지 않게..." }
-->
<template>
<div>
    <h2>콘솔을 확인합니다.</h2>
</div>
</template>

<script setup>
import axios from "axios";
const requestAPI = async () => {
    const url = "/api/todos";
    
    let data = { todo: "윗몸일으키기 3세트", desc: "너무 빠르지 않게..." };
    const resp1 = await axios.post(url, data);
    console.log(resp1.data);
};

requestAPI();
</script>