import React, { useReducer, useEffect, useState, useCallback } from "react";
import { todoReducer, categoryReducer, colorReducer } from "./todoRedusers";
import { initialState } from "./todoInitialState";
import {
  addTodo,
  toggleTodo,
  deleteTodo,
  addCategory,
  selectCategory,
  deleteCategory,
} from "./todoActions";

export const TodoContext = React.createContext({});

const TodoContextProvider = ({ children }) => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState.todos);
  const [categorys, dispatchCategory] = useReducer(
    categoryReducer,
    initialState.categorys
  );
  const [colors, dispatchColors] = useReducer(
    colorReducer,
    initialState.colors
  );

  const [selectedCategory, setSelectedCategory] = useState(categorys[0]);
  const [selectedTodos, setSelectedTodos] = useState(todos);

  const handleSelectedCategory = useCallback((id) => {
    selectCategory(id, dispatchCategory);
  }, []);

  const handleAddCategory = useCallback(
    (category_) => {
      addCategory(category_, dispatchCategory);
      handleSelectedCategory(category_.id);
    },
    [handleSelectedCategory]
  );

  const handleDeleteCategory = useCallback(
    (id) => {
      deleteCategory(id, dispatchCategory);
      handleSelectedCategory(categorys[0].id);
    },
    [handleSelectedCategory, categorys]
  );

  const handleAddTodo = useCallback(
    (todo, selectedCategory, color) =>
      addTodo(todo, selectedCategory, color, dispatchTodo),
    []
  );

  const handleToggleTodo = useCallback(
    (id) => toggleTodo(id, dispatchTodo),
    []
  );

  const handleDeleteTodo = useCallback(
    (id) => deleteTodo(id, dispatchTodo),
    []
  );

  const selectedCategoryAndTodos = useCallback(() => {
    const activeCategory = categorys.filter(
      (category) => category.selected === true
    )[0];

    setSelectedCategory(activeCategory);

    if (activeCategory.id === 1) {
      setSelectedTodos(todos);
    } else {
      const sortedTodos = todos.filter(
        (todo) => Number(todo.category.id) === Number(activeCategory.id)
      );
      setSelectedTodos(sortedTodos);
    }
  }, [categorys, todos]);

  useEffect(() => {
    localStorage.setItem(
      "todoApp",
      JSON.stringify({
        categorys: categorys,
        todos: todos,
        selectCategory: selectedCategory,
        colors: colors,
      })
    );
    selectedCategoryAndTodos();
  }, [todos, categorys, selectedCategory, colors, selectedCategoryAndTodos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        colors,
        categorys,
        selectedTodos,
        selectedCategory,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
        handleAddCategory,
        handleSelectedCategory,
        handleDeleteCategory,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
