import React, { useContext, useState } from "react";
import { todoContext } from "./todoContext";

const AddCategory = () => {
  const { addCategory, dispatchCategory, handleSelectedCategory } = useContext(
    todoContext
  );
  const [category, setCategory] = useState({ id: null, text: "" });
  const formHandler = (e) => {
    e.preventDefault();
    const id = Date.now();
    addCategory({ id: id, text: category }, dispatchCategory);
    handleSelectedCategory(id);
    setCategory({ id: null, text: "" });
  };
  return (
    <div>
      <form onSubmit={formHandler}>
        <input
          type="text"
          name="category"
          value={category.text}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />

        <button type="submit" disabled={category.length < 2}>
          Add category
        </button>
      </form>
    </div>
  );
};

export default AddCategory;
