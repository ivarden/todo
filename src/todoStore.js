export const initialState = localStorage.todoApp
  ? JSON.parse(localStorage.todoApp)
  : {
      todos: [],
      categorys: [{ id: 1, text: "All Todos", color: "red", selected: true }],
      selected_category: null,
    };


