import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import styles from "./CategoryItems.module.scss";

const DeleteCategoryItem = ({ id }) => {
  const { todos, handleDeleteCategory } = useContext(TodoContext);
  const todos_ = todos.filter((todo) => todo.category.id === id).length;

  if (id === 1 || todos_) {
    return (
      <div className={styles.category__count}>
        {id === 1 ? todos.length : todos_}
      </div>
    );
  } else {
    return (
      <div
        onClick={(event) => {
          event.stopPropagation();
          handleDeleteCategory(id);
        }}
        className={styles.category__button}
      >
        <i className="far fa-window-close"></i>
      </div>
    );
  }
};

export default DeleteCategoryItem;
