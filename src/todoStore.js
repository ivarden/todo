const ACTION_TYPE = {
  ADD_TODO: "ADD_TODO",
  TOGGLE_TODO: "TOGGLE_TODO",
  DELETE_TODO: "DELETE_TODO",
  ADD_CATEGORY: "ADD_CATEGORY",
  SELECT_CATEGORY: "SELECT_CATEGORY",
  DELETE_CATEGORY: "DELETE_CATEGORY",
};

const ACTION_CREATOR = {
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

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TODO: {
      return [...state, action.payload];
    }
    case ACTION_TYPE.TOGGLE_TODO: {
      return state.map((todo) =>
        todo.id === +action.payload
          ? { ...todo, compleated: !todo.compleated }
          : todo
      );
    }
    case ACTION_TYPE.DELETE_TODO: {
      return state.filter((todo) => todo.id !== action.payload);
    }
    default:
      return state;
  }
};

export const categoryReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_CATEGORY: {
      return [...state, action.payload];
    }
    case ACTION_TYPE.SELECT_CATEGORY: {
      return state.map((category) =>
        Number(category.id) === Number(action.payload)
          ? { ...category, selected: true }
          : { ...category, selected: false }
      );
    }
    case ACTION_TYPE.DELETE_CATEGORY: {
      return state.filter((category) => category.id !== action.payload);
    }
    default:
      return state;
  }
};

export const initialState = localStorage.todoApp
  ? JSON.parse(localStorage.todoApp)
  : {
      todos: [],
      categorys: [{ id: "", text: "All Todos", color: "red", selected: false }],
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
