<!-- 문제 (Page. 9)
다음 조건을 만족하는 SongList 컴포넌트를 정의하세요.
o App.vue에서 정의한 체크된 곡 수 값을 출력.
-->

<template>
    <ul>
        <SongListItem v-for="s in songs" :key="s.id" :song="s" />
    </ul>
    <div>체크된 곡 수 : {{ doneCount }}</div>
</template>

<script>
import SongListItem from './SongListItem.vue';
export default {
    name: 'SongList',
    components: {
        SongListItem,
    },
    props: ['songs'],
    inject: ['doneCount']
};
</script>
