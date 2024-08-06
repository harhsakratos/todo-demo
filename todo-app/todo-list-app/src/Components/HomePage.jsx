import React from "react";
import { Divider } from "antd";
import TodoList from "./TodoList";
import FormComponent from "./FormComponent";

const HomePage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", textDecoration: "underline" }}>
        Your To-Do List
      </h1>
      <div>
        <FormComponent />
      </div>
      <Divider />
      <TodoList />
    </div>
  );
};

export default HomePage;
