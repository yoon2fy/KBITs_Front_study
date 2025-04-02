// 예제 07-01 
// + 예제 07-05

import { createApp } from 'vue'
import App from './App.vue'
import CheckboxItem from './components/CheckboxItem.vue'

createApp(App).component('CheckboxItem', CheckboxItem).mount('#app')

// 전역 컴포넌트로 설정하는 방법은, .component() 메서드를 이용해서 등록하는 것이다.
