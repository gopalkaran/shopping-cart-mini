import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import allReducers from "./store/reducers/index.ts";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";

const store = createStore(allReducers);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
