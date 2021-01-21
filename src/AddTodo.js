import React, { useContext, useState } from "react";
import { todoContext } from "./todoContext";

const AddTodo = () => {
  const {
    handleAddTodo,
    categorys,
    handleSelectedCategory,
    selectedCategory,
  } = useContext(todoContext);

  const [todo, setTodo] = useState("");
  const [color, setColor] = useState("");

  const handleCategoryChange = (event) => {
    handleSelectedCategory(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
    // console.log(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddTodo(todo, selectedCategory, color);
    setTodo("");
    setColor("");
  };

  const colors = [
    { id: 1, color: "Yellow" },
    { id: 2, color: "Orange" },
    { id: 3, color: "Red" },
    { id: 4, color: "Pink" },
    { id: 5, color: "Violet" },
    { id: 6, color: "Skyblue" },
    { id: 7, color: "Lightgreen" },
    { id: 8, color: "Brown" },
  ];
  // const colors = [
  //   { id: 1, color: "#ef476f" },
  //   { id: 2, color: "#06d6a0" },
  //   { id: 3, color: "#118ab2" },
  //   { id: 4, color: "#073b4c" },
  //   { id: 5, color: "#3a86ff" },
  //   { id: 6, color: "#ffb703" },
  //   { id: 7, color: "#fb8500" },
  //   { id: 8, color: "#d90429" },
  // ];
  // console.log("selectedCategory", selectedCategory)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <select
          value={selectedCategory.id || ""}
          onChange={handleCategoryChange}
        >
          {categorys.map((category) => (
            <option key={category.id} value={category.id}>
              {category.text}
            </option>
          ))}
        </select>

        <select value={color} onChange={handleColorChange}>
          <option key="1" value="">
            Gray
          </option>
          {colors.map((color_) => (
            <option key={color_.id} value={color_.color}>
              {color_.color}
            </option>
          ))}
        </select>

        <input
          type="text"
          name="todo"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />

        <button type="submit" disabled={todo.length < 2}>
          Add todo
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
