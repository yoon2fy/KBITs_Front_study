<!-- 
10_vue(심화2)
o async/await axios를 이용해서 todo 목록을 얻어 출력하도록
o App2.vue를 작성하고 확인하세요.
-->

<template></template>

<script setup>
import axios from 'axios';

const listUrl = "/api/todos";
const todoUrlPrefix = "/api/todos/";

const requestAPI = async () => {
    let todoList;
    let response = await axios.get(listUrl);
    
    todoList = response.data;
    console.log("# TodoList : ", todoList);
    
    for (let i = 0; i < todoList.length; i++) {
        response = await axios.get(todoUrlPrefix + todoList[i].id);
        console.log(`# ${i + 1}번째 Todo : `, response.data);
    }
};

requestAPI();
</script>