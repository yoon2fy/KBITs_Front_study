<template>
  <div>
    <h2>App 컴포넌트</h2>
    <hr>
    <!-- 지역 컴포넌트로 등록하기 (예제 07-06) -->
    <ul>
      <CheckboxItem/>
      <CheckboxItem/>
      <CheckboxItem/>
      <CheckboxItem/> 
    </ul>
    
  </div>
</template>



<script>
import CheckboxItem from './components/CheckboxItem.vue';
  export default {
    name: 'App',
    components: {CheckboxItem},
  }
  
</script>



<style></style>



