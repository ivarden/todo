import React, { useContext } from "react";
import { todoContext } from "./todoContext";
import styles from "./CategoryItems.module.scss";

const CategoryItem = () => {
  const {
    handleSelectedCategory,
    categorys,
    todos,
    selectedTodos,
    handleDeleteCategory,
  } = useContext(todoContext);

  const clickDeleteHandler = (e, id) => {
    e.stopPropagation();
    handleDeleteCategory(id);
  };

  const DeleteCategory = ({ id }) => {
    if (id === 1) return "";

    const todosCount = todos.filter(
      (todo) => Number(todo.category.id) === Number(id)
    ).length;
    console.log("todosCount", todosCount);
    // return selectedTodos.length ? (
    return todosCount.length ? (
      ""
    ) : (
      <div
        onClick={(e) => clickDeleteHandler(e, id)}
        className={styles.category__button}
      >
        <i className="far fa-window-close"></i>
      </div>
    );
  };

  return (
    <div>
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
          <div className={styles.category__text}>{category.text}</div>
          <DeleteCategory id={category.id} />
        </div>
      ))}
    </div>
  );
};
export default CategoryItem;
