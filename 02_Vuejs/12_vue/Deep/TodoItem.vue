<template></template>\

<script setup>
import { useRouter } from 'vue-router';
import { useTodoListStore } from '@/stores/todoList.js';


defineProps({
    todoItem: { Type:Object, required:true}
})

const router = useRouter();
const todoListStore = useTodoListStore();
const { deleteTodo , toggleDone } = todoListStore;
</script>