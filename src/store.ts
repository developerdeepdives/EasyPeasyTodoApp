import { createStore, createTypedHooks } from "easy-peasy";
import model, { StoreModel } from "./model";

export const {
  useStoreActions,
  useStoreState,
  useStoreDispatch,
} = createTypedHooks<StoreModel>();

export default createStore<StoreModel>(model);
