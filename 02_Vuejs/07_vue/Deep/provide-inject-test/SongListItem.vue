<!-- 문제 (Page. 8)
다음 조건을 만족하는 SongListItem 컴포넌트를 정의하세요.
o song.done의 값에 따라 App.vue에서 정의한 icon를 설정. 
-->

<template>
    <li>
        <i :class="song.done ? icons.checked : icons.unchecked"></i>
        {{ song.title }}
    </li>
</template>

<script>
export default {
    name: 'SongListItem',
    inject: ['icons'],
    props: ['song'],
};
</script>