import { ACTION_TYPE } from "./todoActions";

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
