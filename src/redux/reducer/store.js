import { createStore } from "redux";
import rootReducers from "./index"; // Adjust this path if necessary

// Enable Redux DevTools Extension if available
const store = createStore(
  rootReducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
