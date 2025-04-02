# [프로젝트 명: todolist-app]
---
## Step 1. 데이터가 변경되는 단위로 컴포넌트 세분화
---
## Step 2. 관리해야 할 데이터
{
    todoList: [
        { id: 1, todo 자전거 타기 ", completed: false}
        { id: 2, todo 딸과 공원 산책 ", completed: true}
        { id: 3, todo 일요일 애견 카페 ", completed: false}
        { id: 4, todo :"Vue 원고 집필 ", completed: false}
    ]
}

---
## Step 3. 메서드
### [메서드 목록]
- addTodo(todo)
- deleteTodo(id)
- toggleCompleted(id)

### [수신 이벤트 목록]
- add-todo: 전달 인자-todo
- delete-todo: 전달 인자-id
- toggle-completed: 전달 인자-id

### [컴포넌트 목록]
1. App 컴포넌트
- data: todoList 배열
- methods: addTodo, deleteTodo, toggleCompleted 메서드
- 수신 이벤트: add-todo, delete-todo, toggle-completed

2. InputTodo 컴포넌트
- data: todo 문자열 값
- 발신 이벤트: add-todo

3. TodoList 컴포넌트
- props: todoList 배열 (todoList)
- 발신 이벤트: delete-todo(경유), toggle-completed(경유)
- 수신 이벤트: delete-todo(경유), toggle-completed(경유)

4. TodoListItem 컴포넌트
- props: todoItem(todoList 배열의 값 하나)
- 발신 이벤트: delete-todo, toggle-completed

---
