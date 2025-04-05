<template>
<div class="container">
    <Header />
    <router-view />
</div>
</template>
 
<script setup>
import { reactive, provide, computed } from 'vue';
import Header from '@/components/Header.vue';
import axios from 'axios';

const BASEURI = "/api/todos";
const states = reactive({ todoList:[]  });



//TodoList목록을조회합니다.
const fetchTodoList = async () => {
    try {
        const response = await axios.get(BASEURI);
        if (response.status === 200) {
            states.todoList = response.data;
        } else {
            alert('데이터조회실패');
        }
    } catch(error) {
        alert('에러발생:' + error);
    }
}


// 새로운 TodoItem을 추가합니다.
const addTodo = async ({ todo, desc }, successCallback) => {
    try {
        const payload = { todo, desc };
        const response = await axios.post(BASEURI, payload);
        if (response.status === 201) {
            states.todoList.push({ ...response.data, done: false });
            successCallback();
        } else {
            alert('Todo 추가 실패');
        }
    } catch (error) {
        alert('에러발생 :' + error);
    }
};



// 기존 TodoItem을 변경합니다.
const updateTodo = async ({ id, todo, desc, done }, successCallback) => {
    try {
        const payload = { id, todo, desc, done };
        const response = await axios.put(BASEURI + `/${id}`, payload);
        if (response.status === 200) {
            let index = states.todoList.findIndex((todo) => todo.id === id);
            states.todoList[index] = payload;
            successCallback();
        } else {
            alert('Todo 변경 실패');
        }
    } catch (error) {
        alert('에러발생 :' + error);
    }
};


// 기존 TodoItem을 삭제합니다.
const deleteTodo = async (id) => {
    try {
        const response = await axios.delete(BASEURI + `/${id}`);
        console.log(response.status, response.data);
        if (response.status === 200) {
            let index = states.todoList.findIndex((todo) => todo.id === id);
            states.todoList.splice(index, 1);
        } else {
            alert('Todo 삭제 실패');
        }
    } catch (error) {
        alert('에러발생 :' + error);
    }
};


// 기존 TodoItem의 완료여부(done) 값을 토글합니다.
const toggleDone = async (id) => {
    try {
        let todo = states.todoList.find((todo) => todo.id === id);
        let payload = { ...todo, done: !todo.done };
        const response = await axios.put(BASEURI + `/${id}`, payload);
        if (response.status === 200) {
            todo.done = payload.done;
        } else {
            alert('Todo 완료 변경 실패');
        }
    } catch (error) {
        alert('에러발생 :' + error);
    }
};

provide('todoList', computed(()=>states.todoList));
provide('actions', { addTodo, deleteTodo, toggleDone, updateTodo, fetchTodoList })

fetchTodoList();

</script>