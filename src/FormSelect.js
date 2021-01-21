import React, { useState, useContext } from "react";
import { todoContext } from "./todoContext";

const FormSelect = () => {
  const { categorys } = useContext(todoContext);
  const [category, setCategory] = useState({});

  const handleChange = (event) => {
    setCategory({ category: event.target.value });
  };

  const handleSubmit = (event) => {
    alert("Your favorite flavor is: " + this.state.value);
    event.preventDefault();
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Pick the category:
          <select value={category} onChange={handleChange}>
            {categorys.map((category) => (
              <option value={category.id}>{category.text}</option>
            ))}
          </select>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default FormSelect;
