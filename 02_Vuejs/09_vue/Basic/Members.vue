<!-- 문제 (page. 15): Members 페이지 컴포넌트를 완성하세요. -->

<template>
  <div>
    <h2 class="m-4">이날치 멤버</h2>
    <div class="container">
      <div class="row">
        <div v-for="m in members" :key="m.id" class="col-6 col-xs-6 col-sm-4 col-md-3 col-lg-2">
          <router-link :to="'/members/' + m.id">
            <img
              class="img-thumbnail"
              style="width: 90px; height: 110px"
              :src="m.photo"
              :title="m.name"
            /><br />
            <h6 class="display-7">{{ m.name }}</h6>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import members from '@/members.json'

export default {
  name: 'Members',
  setup() {
    return { members }
  },
}
</script>

<!-- 문제(Page.13): App.vue에 다음 코드를추가하세요. -->
<style>
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css');
… .fa {
  padding: 5px;
  width: 30px;
  text-align: center;
  text-decoration: none;
  margin: 5px 2px;
}
.fa-facebook {
  background: #3b5998;
  color: white;
}
.fa-youtube {
  background: #bb0000;
  color: white;
}
.fa-instagram {
  background: #125688;
  color: white;
}
</style>
