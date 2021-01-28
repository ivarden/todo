import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import Icon from "./components/Icon";
import styles from "./TodoItems.module.scss";

const TodoItems = () => {
  const { selectedTodos, handleToggleTodo, handleDeleteTodo } = useContext(
    TodoContext
  );

  const clickIconHandle = (id, status) => {
    status === "done" ? handleToggleTodo(id) : handleDeleteTodo(id);
  };

  const backgroundColor = (todo) => ({
    backgroundColor: todo.compleated ? "" : todo.color,
  });

  return (
    <>
      {selectedTodos.map((todo) => (
        <div
          key={todo.id}
          className={styles.todo__wrap}
          style={backgroundColor(todo)}
        >
          <div className={styles.todo__icons} style={backgroundColor(todo)}>
            <Icon
              onClick={(event) => clickIconHandle(todo.id, "delete")}
              icon="fas fa-window-close"
            />
            <Icon
              onClick={(event) => clickIconHandle(todo.id, "done")}
              icon="far fa-check-square"
            />
          </div>
          <div
            className={`${styles.todo__text} ${
              todo.compleated && styles.todo__text_done
            }`}
            style={backgroundColor(todo)}
          >
            {todo.value}
          </div>
        </div>
      ))}
    </>
  );
};
export default TodoItems;
