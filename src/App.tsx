import React, { useState } from "react";
import "./App.css";
import {
  Container,
  Typography,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Snackbar,
} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { useStoreState, useStoreActions } from "./store";
import TodosInput from "./TodosInput";
import CloseIcon from "@material-ui/icons/Close";
import Notifications from "./Notifications";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: theme.spacing(5),
    },
    paper: {
      padding: theme.spacing(5),
    },
  })
);

function App() {
  const classes = useStyles();

  const items = useStoreState(state => state.todos.todos);
  const removeTodo = useStoreActions(actions => actions.todos.removeTodo);
  const toggleTodo = useStoreActions(actions => actions.todos.toggleTodo);

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h2">Todo App</Typography>
        <TodosInput />
        <List>
          {items.map(item => (
            <ListItem button key={item.id} onClick={() => toggleTodo(item.id)}>
              <ListItemText
                primary={`${item.text} - ${
                  item.completed ? "finished" : "unfinished"
                }`}
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete">
                  <CloseIcon onClick={() => removeTodo(item.id)} />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
      <Notifications />
    </Container>
  );
}

export default App;
