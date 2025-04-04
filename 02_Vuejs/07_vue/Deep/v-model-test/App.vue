<template>
  <div>
    <InputName v-model:name="searchName" />
    <h3>검색어 : {{ searchName }}</h3>
  </div>
</template>

<script>
import InputName from './components/InputName.vue';

export default {
  name: 'App',
  components: { InputName },
  data() {
    return { searchName: 'John' };
  }
};
</script>

<!-- 

o InputName.vue에서 name 프로퍼티를 받음.
o v-model:name을 통해 searchName과 연결.
o <input>의 value는 name과 연결되며,
  @input 이벤트에서 $emit('update:name', 값)을 호출하여
  부모 컴포넌트의 데이터를 변경.

-->
