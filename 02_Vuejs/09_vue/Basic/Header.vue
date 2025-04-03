<!-- 문제 (page 5) : 메뉴바 역할을 하는 Header 컴포넌트를 정의하세요.
 o Bootstrap을 이용하여 작성
 o 다음처럼 화면 폭에 따라 반응하도록 함.
 -->
<!-- 예제 10-04 -->

<template>
    <nav class="navbar navbar-expand-md bg-dark navbar-dark mt-2">
        <span class="navbar-brand">이날치(LeeNalChi)</span>
        <button class="navbar-toggler" type="button" @click="changeIsNavShow">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div :class="navClass">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <router-link class="nav-link" to="/">홈</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/about">소개</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/members">멤버</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/videos">영상</router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import { computed, reactive } from 'vue';

export default {
    setup (){
        const state = reactive({
            inNavShow: false
        })
        const navClass = computed(()=> state.isNavShow
            ? "collapse navbar-collapse show" : "collapse navbar-collapse")
        const changeIsNavShow = () => {
            state.isNavShow = !state.isNavShow;
        }

        return {state, changeIsNavShow, navClass};
    }
}
</script>






