<!-- 
10_vue(심화1)
o axios를 이용해서 todo 목록을 얻어 콘솔에 출력하고,
o 이어서 id가 1인 todo를 얻어,
o 그 결과를 콘솔에 출력하도록 App.vue를 수정하세요.

o Promise의 then/catch를 이용해서 작성함.
-->


<template>
<div>
    <h2>콘솔을 확인합니다.</h2>
</div>
</template>

<script setup>
import axios from 'axios';

const listUrl = "/api/todos";
const todoUrlPrefix = "/api/todos/";

const requestAPI = () => {
let todoList = [];

axios
.get(listUrl)
.then((response) => {
    todoList = response.data;
    console.log("# TodoList : ", todoList);
    return todoList[0].id;
})
.then((id) => {
    return axios.get(todoUrlPrefix + id);
})
.then((response) => {
    console.log("## 첫번째 Todo : ", response.data);
    return todoList[1].id;
})
.then((id) => {
    axios
    .get(todoUrlPrefix + id)
    .then((response) => {
        console.log("## 두번째 Todo : ", response.data);
    });
});
};

requestAPI();
</script>