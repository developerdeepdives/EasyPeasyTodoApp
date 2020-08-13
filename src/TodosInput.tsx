import React, { FC, useState } from "react";
import { TextField } from "@material-ui/core";
import { useStoreActions } from "./store";

const TodosInput: FC = () => {
  const [input, setInput] = useState("");
  const createTodo = useStoreActions(actions => actions.todos.createTodo);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && input !== "") {
      createTodo(input);
      setInput("");
    }
  };

  return (
    <TextField
      label="Add new todo item"
      fullWidth
      value={input}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
    />
  );
};

export default TodosInput;
