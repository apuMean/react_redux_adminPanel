import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { Provider } from "react-redux"; //react-redux is the official package used to make Redux and React work together.
import configureStore from "./store/configureStore";
const configStore = configureStore();

// ReactDOM.render(<App />, document.getElementById('root'));
//below line This lets your components see the store.
ReactDOM.render(
  <Provider store={configStore}>
    <App />
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
