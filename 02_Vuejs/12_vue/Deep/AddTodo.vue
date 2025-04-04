<template></template>

<script setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { useTodoListStore } from '@/stores/todoList.js';

const router = useRouter();
const { addTodo } = useTodoListStore();
const todoItem = reactive({ todo:"", desc:""})


const addTodoHandler = () => {
    let { todo } = todoItem;
    if (!todo || todo.trim() === ""){
        alert('할일은 반드시 입력해야 합니다.');
        return;
    }
    addTodo({ ...todoItem }, ()=> {
        router.push('/todos')
    });
}
</script>