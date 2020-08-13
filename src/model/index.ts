import todos, { TodosModel } from "./todos";
import notificationsModel, { NotificationsModel } from "./notifications";

export interface StoreModel {
  todos: TodosModel;
  notificationsModel: NotificationsModel;
}

const model: StoreModel = {
  todos,
  notificationsModel,
};

export default model;
