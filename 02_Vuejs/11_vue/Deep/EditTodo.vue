<template></template>

<script setup>
import { inject, reactive } from 'vue';
import { useRouter, useRoute } from 'vue-router';
const todoList = inject('todoList');
const { updateTodo } = inject('actions');
const router = useRouter();
const currentRoute = useRoute();
const matchedTodoItem = todoList.value.find((item)=> item.id === currentRoute.params.id)

if (!matchedTodoItem)  { 
    router.push('/todos'); 
}

const todoItem =  reactive({ ...matchedTodoItem })
const updateTodoHandler = () => {
    let { todo } = todoItem;
    if (!todo || todo.trim()==="") {
        alert('할일은반드시입력해야합니다');
        return;
    }
    updateTodo({ ...todoItem }, ()=>{
        router.push('/todos');
    });
    }
</script>