import React from "react";
import { Button, Space, Table } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useStateValue } from "../store/StateContext";

const TodoList = () => {
  const { state, dispatch } = useStateValue();

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

  const TableData = [...state];

  return (
    <div>
      <Table columns={columns} dataSource={TableData} />
    </div>
  );
};

export default TodoList;
