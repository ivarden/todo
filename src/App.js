import React, { useContext } from "react";
import { todoContext } from "./todoContext";
import TodoItem from "./TodoItems";
import AddTodo from "./AddTodo";
import AddCategory from "./AddCategory";
import CategoryItem from "./CategoryItems";
import styles from "./App.module.scss";

const App = () => {
  const { todos } = useContext(todoContext);

  return (
    <div className={styles.wrap}>
      <div className={styles.wrap__category}>
        <AddCategory />
        <div className={styles.wrap__category__wrap}>
          <CategoryItem />
        </div>
      </div>
      <div className={styles.wrap__todo}>
        <AddTodo />
        <div className={styles.wrap__todo__wrap}>
          <TodoItem />
        </div>
        {!todos.length && <h3>No any todo!</h3>}
      </div>
    </div>
  );
};

export default App;
