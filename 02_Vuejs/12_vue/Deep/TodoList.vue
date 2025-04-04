<template>
    <div class="row">
        <span>완료된 할일 : {{ doneCount }}</span>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useTodoListStore } from '@/stores/todoList.js';
import TodoItem from '@/components/ TodoItem.vue';

const todoListStore = useTodoListStore();
const { fetchTodoList } = todoListStore;
const doneCount = computed(() => todoListStore.doneCount);
const todoList = computed(() => todoListStore.todoList);
</script>