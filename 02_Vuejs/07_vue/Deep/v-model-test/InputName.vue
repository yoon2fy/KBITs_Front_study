<!-- 문제 1 (Page. 3):
다음 조건을 만족하는 InputName 컴포넌트를 정의하세요.

o name 프로퍼티 추가.
o name 프로퍼티는 사용자 정의 v-model로 운영.
o <input>을 이용해 사용자로부터 입력받음.
o <input>의 입력값을 name 프로퍼티로 매핑함.

-->
<template>
    <div>
        <input type="text" :value="name" @input = "$emit('update:name', $event.target.value)" />
        <h3>검색어 : {{ searchName }}</h3>
    </div>
</template>


<script>
export default {
    name: 'InputName',
    props: ['name'],
};
</script>