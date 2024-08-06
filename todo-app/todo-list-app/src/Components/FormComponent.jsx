import React from "react";
import { Button, Form, Input, Select, Space } from "antd";

const FormComponent = () => {
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };
  return (
    <Form
      form={form}
      name="control-hooks"
      variant="filled"
      style={{
        width: "20vw",
        alignItems: "center",
        marginLeft: "40%",
        marginTop: "3%",
      }}
    >
      <Form.Item
        label="Task Name"
        name="taskName"
        rules={[
          {
            required: true,
            message: "Please Enter a Task!",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Status"
        name="Status"
        rules={[
          {
            required: true,
            message: "Please Select an option!",
          },
        ]}
      >
        <Select
          options={[
            {
              value: "New",
              label: "New",
            },
            {
              value: "Completed",
              label: "Completed",
            },
            {
              value: "Abandoned",
              label: "Abandoned",
            },
          ]}
        />
      </Form.Item>
      <Form.Item
        label="Priority"
        name="priority"
        rules={[
          {
            required: true,
            message: "Please Select an option!",
          },
        ]}
      >
        <Select
          options={[
            {
              value: "One (1)",
              label: "One (1)",
            },
            {
              value: "Two (2)",
              label: "Two (2)",
            },
            {
              value: "Three (3)",
              label: "Three (3)",
            },
          ]}
        />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 6,
          span: 16,
        }}
      >
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100px", marginLeft: "20px" }}
          >
            Add
          </Button>

          <Button
            htmlType="button"
            onClick={onReset}
            style={{ width: "100px", marginLeft: "10px" }}
          >
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

export default FormComponent;
