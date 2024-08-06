import React from "react";
import { Button, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

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
    },
  ];

  return (
    <div>
      <Table columns={columns} dataSource={TableData} />
    </div>
  );
};

export default TodoList;
