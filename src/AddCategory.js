import React, { useContext, useState } from "react";
import { todoContext } from "./todoContext";
import styles from "./AddCategory.module.scss";

const AddCategory = () => {
  const { handleAddCategory } = useContext(todoContext);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCategory({ id: Date.now(), text: category });
    setCategory("");
  };
  return (
    <div className={styles.wrap}>
      <form onSubmit={handleSubmit} className={styles.wrap__form}>
        <input
          type="text"
          name="category"
          placeholder="add new category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />

        <button type="submit" disabled={category.length < 2}>
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
