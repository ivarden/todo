import { ACTION_TYPE } from "./todoActions";

export const todoReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_TODO: {
      return [...state, action.payload];
    }
    case ACTION_TYPE.TOGGLE_TODO: {
      return state.map((todo) =>
        Number(todo.id) === Number(action.payload)
          ? { ...todo, compleated: !todo.compleated }
          : todo
      );
    }
    case ACTION_TYPE.DELETE_TODO: {
      return state.filter((todo) => Number(todo.id) !== Number(action.payload));
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
      return state.filter(
        (category) => Number(category.id) !== Number(action.payload)
      );
    }
    default:
      return state;
  }
};

export const colorReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPE.ADD_COLOR: {
      return [...state, action.payload];
    }
    case ACTION_TYPE.SELECT_COLOR: {
      return state.map((color) =>
        Number(color.id) === Number(action.payload)
          ? { ...color, selected: true }
          : { ...color, selected: false }
      );
    }
    case ACTION_TYPE.DELETE_COLOR: {
      return state.filter(
        (color) => Number(color.id) !== Number(action.payload)
      );
    }
    default:
      return state;
  }
};
