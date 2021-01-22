import { ACTION_CREATOR } from "./todoActions";

export const initialState = localStorage.todoApp
  ? JSON.parse(localStorage.todoApp)
  : {
      todos: [],
      categorys: [{ id: 1, text: "All Todos", color: "red", selected: true }],
      selected_category: null,
    };

export const addTodo = (todo, category, color, dispatch) => {
  dispatch(ACTION_CREATOR.addTodo(todo, category, color));
};
export const toggleTodo = (id, dispatch) => {
  dispatch(ACTION_CREATOR.toggleTodo(id));
};
export const deleteTodo = (id, dispatch) => {
  dispatch(ACTION_CREATOR.deleteTodo(id));
};

export const addCategory = (category, dispatch) => {
  dispatch(ACTION_CREATOR.addCategory(category));
};
export const selectCategory = (category, dispatch) => {
  dispatch(ACTION_CREATOR.selectCategory(category));
};
export const deleteCategory = (id, dispatch) => {
  dispatch(ACTION_CREATOR.deleteCategory(id));
};
