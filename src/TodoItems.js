import React, { useContext } from "react";
import { todoContext } from "./todoContext";
import styles from "./TodoItems.module.scss";

const TodoItem = () => {
  const {
    selectedTodos,
    handleToggleTodo,
    handleDeleteTodo,
  } = useContext(todoContext);

  const clickDoneHandle = (id) => {
    handleToggleTodo(id);
  };

  const clickDeleteHandler = (e, id) => {
    e.stopPropagation();
    handleDeleteTodo(id);
  };

  return (
    <div>
      {selectedTodos.map((todo) => (
        <div
          key={todo.id}
          className={styles.todo__wrap}
          style={{
            borderColor: `${todo.compleated ? "" : todo.color}`,
          }}
        >
          <div
            className={styles.todo__button_wrap}
            style={{
              backgroundColor: `${!todo.compleated ? todo.color : ""}`,
            }}
          >
            <div
              className={styles.todo__button}
              onClick={(e) => clickDeleteHandler(e, todo.id)}
            >
              <i className="fas fa-window-close"></i>
            </div>
            <div
              className={styles.todo__button}
              onClick={() => clickDoneHandle(todo.id)}
            >
              <i className="far fa-check-square"></i>
            </div>
          </div>
          <div
            className={`${styles.todo__text} ${
              todo.compleated && styles.todo__text_done
            }`}
          >
            {todo.text}
          </div>
        </div>
      ))}
    </div>
  );
};
export default TodoItem;
