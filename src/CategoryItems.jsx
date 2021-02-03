import React, { useContext } from "react";
import { TodoContext } from "./TodoContext";
import DeleteCategoryItem from "./DeleteCategoryItem";
import styles from "./CategoryItems.module.scss";

const CategoryItems = () => {
  const { categories, handleSelectedCategory } = useContext(TodoContext);

  return (
    <div className={styles.wrap}>
      {categories.map((category) => (
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
          <DeleteCategoryItem id={category.id} />
        </div>
      ))}
    </div>
  );
};
export default CategoryItems;
