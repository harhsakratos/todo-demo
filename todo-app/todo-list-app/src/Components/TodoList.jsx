import React from "react";
import { Button, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import FormComponent from "./FormComponent";

const TodoList = () => {
  const columns = [
    {
      title: "Task Name",
      dataIndex: "taskName",
      key: "taskName",
    },
    {
      title: "Date Created",
      dataIndex: "dateCreated",
      key: "dateCreated",
    },
    {
      title: "Date Updated",
      dataIndex: "dateUpdated",
      key: "dateUpdated",
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
    },
    {
      title: "Priority",
      key: "priority",
      dataIndex: "priority",
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <Space size="middle">
          <Button type="primary" shape="round" icon={<EditOutlined />} />
          <Button type="text" shape="round" icon={<DeleteOutlined />} danger />
        </Space>
      ),
    },
  ];

  const TableData = [
    {
      taskName: "Go to Gym 5:00 AM",
      dateCreated: String(new Date().toLocaleString().toLocaleUpperCase()),
      dateUpdated: String(new Date().toLocaleString().toUpperCase()),
      status: "Not Done",
      priority: "Three (3)",
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={TableData} />
      
    </div>
  );
};

export default TodoList;
