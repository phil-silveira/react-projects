import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reduxThunk from "redux-thunk";
import reducers from "./reducers";
import App from "./App";
import * as ServiceWorker from "./serviceWorker";

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    jiejieiej br
    </Provider>,
    document.getElementById("root")
);
ServiceWorker.unregister();
