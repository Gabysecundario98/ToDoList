import 'bootstrap/dist/css/bootstrap.css';
import { StrictMode } from "react";
import ReactDOM from "react-dom";
import ToDoList from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <ToDoList />
  </StrictMode>,
  rootElement
);