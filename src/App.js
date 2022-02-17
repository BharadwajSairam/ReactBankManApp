import React from "react";
import configureStore  from "./store/configureStore";
import AppRoutes from "./components/Routes";
import { Provider } from "react-redux";
const store = configureStore()

export default function App() {

  return (
    <Provider store={store}>
    
    <AppRoutes/>
    </Provider>
  );
}
