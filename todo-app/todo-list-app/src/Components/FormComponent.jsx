import React from "react";
import { Button, Form, Input, Select } from "antd";
import { useStateValue } from "../store/StateContext";
import { Actions } from "../store/actions";

const FormComponent = () => {
  const { state, dispatch } = useStateValue();
  const [form] = Form.useForm();
  const onReset = () => {
    form.resetFields();
  };

  const onFinish = (values) => {
    dispatch(Actions.addTask(values));
  };

  return (
    <Form
      form={form}
      onFinish={onFinish}
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
        name="status"
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
      <div style={{ display: "flex" }}>
        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            style={{ width: "100px", marginLeft: "30px" }}
          >
            Add
          </Button>
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 6,
            span: 16,
          }}
        >
          <Button
            htmlType="button"
            onClick={onReset}
            style={{ width: "100px", marginLeft: "30px" }}
          >
            Reset
          </Button>
        </Form.Item>
      </div>
    </Form>
  );
};

export default FormComponent;
