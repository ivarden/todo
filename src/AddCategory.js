import React, { useContext, useState } from "react";
import { todoContext } from "./todoContext";

const AddCategory = () => {
  const { handleAddCategory, handleSelectedCategory } = useContext(todoContext);
  const [category, setCategory] = useState({ id: null, text: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    const id = Date.now();
    handleAddCategory({ id: id, text: category });
    handleSelectedCategory(id);
    setCategory({ id: null, text: "" });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
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
