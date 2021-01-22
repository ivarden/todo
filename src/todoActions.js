export const ACTION_TYPE = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
  ADD_CATEGORY: "ADD_CATEGORY",
  SELECT_CATEGORY: "SELECT_CATEGORY",
  DELETE_CATEGORY: "DELETE_CATEGORY",
};

export const ACTION_CREATOR = {
  addTodo: (text, category, color) => ({
    type: ACTION_TYPE.ADD_TODO,
    payload: {
      id: Date.now(),
      text: text,
      category: category,
      color: color,
      compleated: false,
    },
  }),
  toggleTodo: (id) => ({ type: ACTION_TYPE.TOGGLE_TODO, payload: id }),
  deleteTodo: (id) => ({ type: ACTION_TYPE.DELETE_TODO, payload: id }),
  addCategory: ({ id, text }) => ({
    type: ACTION_TYPE.ADD_CATEGORY,
    payload: { id: id, text: text, selected: false },
  }),
  selectCategory: (id) => ({
    type: ACTION_TYPE.SELECT_CATEGORY,
    payload: id,
  }),
  deleteCategory: (id) => ({ type: ACTION_TYPE.DELETE_CATEGORY, payload: id }),
};
