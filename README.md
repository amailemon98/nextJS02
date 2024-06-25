# 기본페이지
localhost:3000/board
route.js와 page.js가 같이 있을때
route.js의 우선순위가 더 높아서 route.js가 실행된다.


## front
- page.js

## back
- route.js

# App router
- 폴더를 생성하면 알아서 라우터를 설정한다.

# board

# front
- src/app/board/page.js
// localhost:3000/board

- src/app/board/[id]/page.js
// localhost:3000/board/1
// localhost:3000/board/2
// localhost:3000/board/3

- src/app/board/components/...(이름 각각)

# back
- src/app/api/board/route.js
// localhost:3000/api/board

- src/app/api/board/[id]/route.js
// localhost:3000/api/board/1
// localhost:3000/api/board/2
// localhost:3000/api/board/3


- src/app/api/model/board/data.js
