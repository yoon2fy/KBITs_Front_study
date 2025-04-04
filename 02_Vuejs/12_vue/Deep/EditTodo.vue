<script setup>

import { reactive } from 'vue';
import { useRouter , useRoute } from 'vue-router';
import { useTodoListStore } from '@/stores/todoList.js';

const router = useRouter();
const currentRoute = useRoute();


const { todoList, updateTodo, } = useTodoListStore();

const matchedTodoItem = todoList.find((item) => item.id === currentRoute.params.id);
if ( !matchedTodoItem ) {
    router.push('/todos');

}
const todoItem = reactive({ ...matchedTodoItem });
const updateTodoHandler = () => {
    let { todo } = todoItem;
    if (!todo || todo.trim() ==="") {
        alert('할일은 반드시 입력해야 합니다.');
        return;
    }
    updateTodo({ ...todoItem }, () => {
        router.push('/todos');
        });
    }
</script>