import React from "react";
import { Input, Button, Space, Divider } from "antd";
import TodoList from "./TodoList";

const HomePage = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Your To-Do List</h1>
      <Space.Compact
        style={{
          width: "45%",
          marginLeft: "20%",
        }}
      >
        <Input placeholder="Add a Task" />
        <Button type="primary">Add</Button>
      </Space.Compact>
      <Divider />
      <TodoList />
    </div>
  );
};

export default HomePage;
