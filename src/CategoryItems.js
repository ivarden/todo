import React, { useContext } from "react";
import { todoContext } from "./todoContext";
import styles from "./CategoryItems.module.scss";

const CategoryItem = () => {
  const {
    handleSelectedCategory,
    categorys,
    selectedCategory,
    todos,
    deleteCategory,
    dispatchCategory,
  } = useContext(todoContext);

  const clickDeleteHandler = (e, id) => {
    e.stopPropagation();
    deleteCategory(id, dispatchCategory);
  };

  const DeleteCategory = (id) => {
    if (id === null) return "";
    const todosCount = todos.filter(
      (todo) => Number(todo.category) === Number(id)
    ).length;
    return todosCount ? (
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
            // Number(category.id) === Number(selectedCategory)
            category.selected
              ? `${styles.category__wrap} ${styles.category__wrap__active}`
              : styles.category__wrap
          }
          key={category.id || category.text}
        >
          <div className={styles.category__text}>{category.text}</div>
          {DeleteCategory(category.id)}
        </div>
      ))}
    </div>
  );
};
export default CategoryItem;
