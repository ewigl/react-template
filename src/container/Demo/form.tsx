import React from "react";
import { Form, Button, Input, message } from 'antd'

class FormComponent extends React.Component {

    onFinish = (values: unknown) => {
        message.success('values: ' + JSON.stringify(values))
    }

    onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    }

    render() {
        return (
            <div style={{ width: '50%', margin: '0 auto' }}>
                <Form
                    labelAlign="left"
                    labelCol={{ span: 4 }}
                    onFinish={this.onFinish}
                    onFinishFailed={this.onFinishFailed}
                >
                    <Form.Item
                        label="Username"
                        name="username"
                        rules={[{ required: true, message: 'Please input your username!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Password"
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input type="password" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="primary" htmlType="submit">Login</Button>
                    </Form.Item>
                </Form>
            </div>
        );
    }

}

export default FormComponent;
