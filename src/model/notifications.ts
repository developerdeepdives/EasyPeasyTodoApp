import { Action, action, ActionOn, actionOn } from "easy-peasy";
import { StoreModel } from ".";

export interface NotificationsModel {
  currentNotification: string;
  onAddedTodo: ActionOn<NotificationsModel, StoreModel>;
}

const notificationsModel: NotificationsModel = {
  currentNotification: "Initial Notification",
  onAddedTodo: actionOn(
    (actions, storeActions) => storeActions.todos.addTodo,
    (state, payload) => {
      state.currentNotification = `Added new todo : ${payload.payload}`;
    }
  ),
};

export default notificationsModel;
