import React, { useContext, useState } from "react";
import { TodoContext } from "./TodoContext";
import Select from "./components/Select";
import Input from "./components/Input";
import Button from "./components/Button";
import styles from "./AddTodo.module.scss";

const AddTodo = () => {
  const {
    handleAddTodo,
    colors,
    categories,
    handleSelectedCategory,
    selectedCategory,
  } = useContext(TodoContext);

  const [todo, setTodo] = useState("");
  const [color, setColor] = useState("White");

  const handleCategoryChange = (event) => {
    handleSelectedCategory(event.target.value);
  };

  const handleColorChange = (event) => {
    const selectedColor = colors.filter(
      (color) => Number(color.id) === Number(event.target.value)
    );
    setColor(selectedColor[0].value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddTodo(todo, selectedCategory, color);
    setTodo("");
    setColor("white");
  };

  return (
    <div className={styles.wrap}>
      <form onSubmit={handleSubmit} className={styles.wrap__form}>
        <Select
          value={selectedCategory.id}
          options={categories}
          onChange={handleCategoryChange}
        />

        <Select value={color} options={colors} onChange={handleColorChange} />

        <Input
          type="text"
          name="todo"
          placeholder="add new todo"
          value={todo}
          onChange={(event) => {
            setTodo(event.target.value);
          }}
        />

        <Button title="Add" text={todo} />
      </form>
    </div>
  );
};

export default AddTodo;
