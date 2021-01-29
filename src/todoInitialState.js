export const initialState = localStorage.todoApp
  ? JSON.parse(localStorage.todoApp)
  : {
      todos: [],
      categories: [{ id: 1, value: "All Todos", color: "", selected: true }],
      selected_category: null,
      colors: [
        { id: 1, value: "White", selected: false },
        { id: 2, value: "Bisque", selected: false },
        { id: 3, value: "Orange", selected: false },
        { id: 4, value: "OrangeRed", selected: false },
        { id: 5, value: "Pink", selected: false },
        { id: 6, value: "Violet", selected: false },
        { id: 7, value: "Yellow", selected: false },
        { id: 8, value: "Lightgreen", selected: false },
        { id: 9, value: "YellowGreen", selected: false },
        { id: 10, value: "Skyblue", selected: false },
      ],
    };
