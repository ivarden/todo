import React, { useContext, useState } from "react";
import { todoContext } from "./todoContext";

const AddCategory = () => {
  const { handleAddCategory } = useContext(todoContext);
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCategory({ id: Date.now(), text: category });
    setCategory("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="category"
          value={category}
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
