import React, { useReducer, useEffect, useState, useCallback } from "react";
import {
  todoReducer,
  initialState,
  addTodo,
  toggleTodo,
  deleteTodo,
  categoryReducer,
  addCategory,
  selectCategory,
  deleteCategory,
} from "./todoStore";

export const todoContext = React.createContext({});

const TodoContextProvider = ({ children }) => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState.todos);
  const [categorys, dispatchCategory] = useReducer(
    categoryReducer,
    initialState.categorys
  );

  const [selectedCategory, setSelectedCategory] = useState(categorys[0]);
  const [selectedTodos, setSelectedTodos] = useState(todos);

  const handleSelectedCategory = useCallback((id) => {
    selectCategory(id, dispatchCategory);
  }, []);

  const handleDeleteCategory = useCallback(
    (id) => {
      deleteCategory(id, dispatchCategory);
      handleSelectedCategory(categorys[0].id);
    },
    [handleSelectedCategory, categorys]
  );

  const handleAddCategory = useCallback(
    (category_) => addCategory(category_, dispatchCategory),
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
  const handleAddTodo = useCallback(
    (todo, selectedCategory, color) =>
      addTodo(todo, selectedCategory, color, dispatchTodo),
    []
  );

  const selectedCategory_ = useCallback(() => {
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
      JSON.stringify({ categorys: categorys, todos: todos })
    );
    selectedCategory_();
  }, [todos, categorys, selectedCategory_]);

  return (
    <todoContext.Provider
      value={{
        todos,
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
    </todoContext.Provider>
  );
};

export default TodoContextProvider;