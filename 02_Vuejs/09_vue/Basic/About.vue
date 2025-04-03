<!-- 문제 (page 7): About.vue 페이지에 현재 url을 출력하고,
 라우터 객체를 콘솔에도 출력하세요. -->

<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ $route.fullPath }}</p>
  </div>
</template>

<script>
export default {
  name: 'About',
  created() {
    console.log(this$route)
  },
}
</script>
<style></style>

<!-- 
======================================================================
문제 (page 8): 앞에서 만든 About.vue를 setup() 함수로 다시 정의하세요. 
======================================================================
-->

<!-- <template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ currentRoute.fullPath }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'

export default {
  name: 'About',
  setup() {
    const currentRoute = useRoute()

    onMounted(() => {
      console.log(currentRoute)
    })

    return { currentRoute }
  },
}
</script>

<style></style> -->

<!-- // ====================================================================== // 문제 (page 8): 앞에서
만든 About.vue를 Composion API로 다시 정의하세요. //
====================================================================== -->
<!-- 
<template>
  <div class="card card-body">
    <h2>About</h2>
    <p>요청 경로 : {{ currentRoute.fullPath }}</p>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'

export default {
  name: 'About',
  setup() {
    const currentRoute = useRoute()
    return { currentRoute }
  },
}
</script>
<style></style> -->
