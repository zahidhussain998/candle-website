import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./store/ReduxMain.js";
import Template from "./components/template.jsx";
import { PersistGate } from "redux-persist/integration/react";





createRoot(document.getElementById("root")).render(
  <StrictMode>

      <Provider store={store}>
      <PersistGate loading={"loading..."} persistor={persistor}>
    <Template>
        <App />
    </Template>
      </PersistGate>
      </Provider>
  </StrictMode>
);
