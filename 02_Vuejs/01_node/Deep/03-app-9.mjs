// 앞에서 작성한 greeting-1.mjs 모듈에 내보기한 모든 함수를
// say라는 객체 이름으로 모두 임포트하여
// 다음과 같이 출력되도록 작성하세요.
// (저는 goodby-1.mjs로 하였습니다.)

import * as say from './goodbye-1.mjs';

say.hello('홍길동');
say.bye('홍길동');