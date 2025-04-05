<!-- 09_vue(심화)
문제 1: NotFound 페이지 컴포넌트를 정의하세요.
o 404 Not Found 출력.
o 잘못된 요청 경로 출력.
-->


<template>
<div class="card card-body">
    <h2>404 Not Found</h2>
    <p>존재하지않는요청경로: {{$route.fullPath}}</p>
</div>
</template>

<script>
export default {
    name:"NotFound",
    created() {
        console.log(this.$route.params)
    }
}
</script>