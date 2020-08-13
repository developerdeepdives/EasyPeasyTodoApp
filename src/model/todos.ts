import { Action, action, Thunk, thunk } from "easy-peasy";
import { nanoid } from "nanoid";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
}

export interface TodosModel {
  todos: Todo[];
  addTodo: Action<TodosModel, string>;
  createTodo: Thunk<TodosModel, string>;
  removeTodo: Action<TodosModel, string>;
  toggleTodo: Action<TodosModel, string>;
}

const todosModel: TodosModel = {
  todos: [],
  addTodo: action((state, payload) => {
    const newTodo = {
      id: nanoid(),
      text: payload,
      completed: false,
    };
    state.todos.push(newTodo);
  }),
  createTodo: thunk(async (actions, payload) => {
    //await axios.post
    actions.addTodo(payload);
  }),
  removeTodo: action((state, payload) => {
    const idx = state.todos.findIndex(item => item.id === payload);
    state.todos.splice(idx, 1);
  }),
  toggleTodo: action((state, payload) => {
    const idx = state.todos.findIndex(item => item.id === payload);
    state.todos[idx].completed = !state.todos[idx].completed;
  }),
};

export default todosModel;
