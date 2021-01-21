import React, { useContext } from "react";
import { todoContext } from "./todoContext";
import TodoItem from "./TodoItems";
import AddTodo from "./AddTodo";
import AddCategory from "./AddCategory";
import CategoryItem from "./CategoryItems";
// import FormSelect from "./FormSelect";

const App = () => {
  const { todos } = useContext(todoContext);

  return (
    <div>
      <AddCategory />
      <CategoryItem />
      {/* <FormSelect /> */}
      <AddTodo />
      <TodoItem />
      {!todos.length && <h3>No any todo!</h3>}
    </div>
  );
};

export default App;
