export const ACTION_TYPE = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
  ADD_CATEGORY: "ADD_CATEGORY",
  SELECT_CATEGORY: "SELECT_CATEGORY",
  DELETE_CATEGORY: "DELETE_CATEGORY",
  ADD_COLOR: "ADD_COLOR",
  SELECT_COLOR: "SELECT_COLOR",
  DELETE_COLOR: "DELETE_COLOR",
};

export const ACTION_CREATOR = {
  addTodo: (todo, category, color) => ({
    type: ACTION_TYPE.ADD_TODO,
    payload: {
      id: Date.now(),
      value: todo,
      category: category,
      color: color,
      compleated: false,
    },
  }),
  toggleTodo: (id) => ({ type: ACTION_TYPE.TOGGLE_TODO, payload: id }),
  deleteTodo: (id) => ({ type: ACTION_TYPE.DELETE_TODO, payload: id }),

  addCategory: ({ id, value }) => ({
    type: ACTION_TYPE.ADD_CATEGORY,
    payload: { id, value, selected: false },
  }),
  selectCategory: (id) => ({
    type: ACTION_TYPE.SELECT_CATEGORY,
    payload: id,
  }),
  deleteCategory: (id) => ({ type: ACTION_TYPE.DELETE_CATEGORY, payload: id }),

  addColor: ({ id, value }) => ({
    type: ACTION_TYPE.ADD_COLOR,
    payload: { id, value, selected: false },
  }),
  selectColor: (id) => ({
    type: ACTION_TYPE.SELECT_COLOR,
    payload: id,
  }),
  deleteColor: (id) => ({ type: ACTION_TYPE.DELETE_COLOR, payload: id }),
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

export const addColor = (color, dispatch) => {
  dispatch(ACTION_CREATOR.addColor(color));
};
export const selectolory = (color, dispatch) => {
  dispatch(ACTION_CREATOR.selectColor(color));
};
export const deleteColor = (id, dispatch) => {
  dispatch(ACTION_CREATOR.deleteColor(id));
};
