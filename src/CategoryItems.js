import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import styles from "./CategoryItems.module.scss";

const CategoryItems = () => {
  const {
    todos,
    categorys,
    handleSelectedCategory,
    handleDeleteCategory,
  } = useContext(TodoContext);

  const DeleteCategory = ({ id }) => {
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

  return (
    <div className={styles.wrap}>
      {categorys.map((category) => (
        <div
          onClick={() => handleSelectedCategory(category.id)}
          className={
            category.selected
              ? `${styles.category__wrap} ${styles.category__wrap__active}`
              : styles.category__wrap
          }
          key={category.id}
        >
          <div className={styles.category__text}>{category.value}</div>
          <DeleteCategory id={category.id} />
        </div>
      ))}
    </div>
  );
};
export default CategoryItems;
