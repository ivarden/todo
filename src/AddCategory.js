import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import Input from "./components/Input";
import Button from "./components/Button";
import styles from "./AddCategory.module.scss";

const AddCategory = () => {
  const { handleAddCategory } = useContext(TodoContext);
  const [category, setCategory] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddCategory({ id: Date.now(), value: category });
    setCategory("");
  };
  return (
    <div className={styles.wrap}>
      <form onSubmit={handleSubmit} className={styles.wrap__form}>
        <Input
          type="text"
          name="category"
          placeholder="add new category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />

        <Button title="Add" text={category} />
      </form>
    </div>
  );
};

export default AddCategory;
