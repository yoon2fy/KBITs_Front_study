// 11_vue(심화1,2 )
// 앞에서 작성한 코드를 다음조건을 만족하도록 수정하세요.
// o 앞 챕터에서 사용한 db.json을 사용하여 json-server 운영함.
// o 로컬변수에 정의된 todos 목록을 제거
// o 모든 데이터는 axios를 이용하여 json-server에서 가져와서 처리하도록 함.



import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    plugins: [vue()],
    resolve: { alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }},

    server: {
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, ''),
            },
        },
    },
})