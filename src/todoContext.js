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
  selectColory,
} from "./todoActions";

export const TodoContext = React.createContext({});

const TodoContextProvider = ({ children }) => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState.todos);
  const [categories, dispatchCategory] = useReducer(
    categoryReducer,
    initialState.categories
  );
  const [colors, dispatchColors] = useReducer(
    colorReducer,
    initialState.colors
  );

  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
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
      handleSelectedCategory(categories[0].id);
    },
    [handleSelectedCategory, categories]
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
  const handleSelectColor = useCallback(
    (id) => selectColory(id, dispatchColors),
    []
  );

  const selectedCategoryAndTodos = useCallback(() => {
    const activeCategory = categories.filter(
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
  }, [categories, todos]);

  useEffect(() => {
    localStorage.setItem(
      "todoApp",
      JSON.stringify({
        categories: categories,
        todos: todos,
        selectCategory: selectedCategory,
        colors: colors,
      })
    );
    selectedCategoryAndTodos();
  }, [todos, categories, selectedCategory, colors, selectedCategoryAndTodos]);

  return (
    <TodoContext.Provider
      value={{
        todos,
        colors,
        categories,
        selectedTodos,
        selectedCategory,
        handleAddTodo,
        handleToggleTodo,
        handleDeleteTodo,
        handleAddCategory,
        handleSelectedCategory,
        handleDeleteCategory,
        handleSelectColor,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
