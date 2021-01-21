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

  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedTodos, setSelectedTodos] = useState(todos);

  const handleSelectedCategory = useCallback((id) => {
    selectCategory(id, dispatchCategory);
    // setSelectedCategory(id);
  }, []);

  const selectedCategory_ = useCallback(() => {
    const activeCategory = categorys.filter(
      (category) => category.selected === true
    )[0].id;
    console.log(activeCategory);
    setSelectedCategory(activeCategory);
    setSelectedTodos(
      todos.filter(
        (todo) => Number(todo.category) === Number(activeCategory)
      )
    );
  }, [categorys, todos]);

  const handleSelectedTodos = useCallback(() => {
    // if (Boolean(selectedCategory)) {
      setSelectedTodos(
        todos.filter(
          (todo) => Number(todo.category) === Number(selectedCategory)
        )
      );
    // } else {
    //   setSelectedTodos(todos);
    // }
  }, [todos, selectedCategory]);

  useEffect(() => {
    localStorage.setItem(
      "todoApp",
      JSON.stringify({ categorys: categorys, todos: todos })
    );
    selectedCategory_();
  }, [todos, categorys, selectedCategory_]);

  // useEffect(() => {
  //   // handleSelectedTodos();
  //   selectedCategory_();
  // }, [
  //   todos,
  //   categorys,
  //   // selectedCategory,
  //   // handleSelectedTodos,
  //   selectedCategory_,
  // ]);

  return (
    <todoContext.Provider
      value={{
        selectedTodos,
        todos,
        addTodo,
        toggleTodo,
        deleteTodo,
        dispatchTodo,
        categorys,
        addCategory,
        deleteCategory,
        dispatchCategory,
        selectedCategory,
        setSelectedCategory,
        handleSelectedCategory,
      }}
    >
      {children}
    </todoContext.Provider>
  );
};

export default TodoContextProvider;
