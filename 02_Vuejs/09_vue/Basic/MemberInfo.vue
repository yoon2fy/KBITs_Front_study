<!-- 문제 (page.14): 앞에서 찾은 멤버 정보를 다음처럼 출력되도록
 MemberInfo의 템플릿 파트를 작성하세요.
○ instagram, facebook, youtube 정보가 있는 경우 해당 경로로 링크를 설정함.
 -->
<template>
  <div className="mt-5">
    <img :src="member.photo" class="img" />
    <h4 class="mt-2">{{ member.name }}({{ member.role }})</h4>
    <p>{{ member.desc }}</p>
    <a
      v-if="member.insta && member.insta !== ''"
      class="fa fa-instagram m-1"
      :href="member.insta"
    ></a>
    <a
      v-if="member.facebook && member.facebook !== ''"
      class="fa fa-facebook m-1"
      :href="member.facebook"
    ></a>
    <a
      v-if="member.youtube && member.youtube !== ''"
      class="fa fa-youtube m-1"
      :href="member.youtube"
    ></a>
    <br /><br />
    <router-link to="/members">멤버 목록으로</router-link>
  </div>
</template>

<!-- 문제 (page 12): MemberInfo 페이지컴포넌트에 다음조건을 만족하도록 수정하세요.
○ member.json을 임포트
○ member.json에서 동적파라미터로 전달된 id 값에 대응하는 member 정보를찾음 -->

<script>
import { useRoute } from 'vue-router'
import members from '@/members.json'

export default {
  name: 'MemberInfo',
  setup() {
    const currentRoute = useRoute()
    const id = parseInt(currentRoute.params.id, 10)
    const member = members.find((m) => m.id === id)
    return { member }
  },
}
</script>
