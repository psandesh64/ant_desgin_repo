import React from 'react';
import { Button, Form, Input, Checkbox, message } from 'antd';
import useGetUsers from '../hooks/useGetUsers';
import useCreateUser, { IUser } from '../hooks/useCreateUser';



const UserForm:React.FC = () => {

    const [form] = Form.useForm();
    const { mutate, isPending } = useCreateUser();
    
    // Optional: refetch users on mount or when needed
    useGetUsers();

    const onFinish = (values: any) => {
        const userData: IUser = {
        username: values.username,
        contact: values.contact,
        isActive: values.isActive ?? false,
        };

        mutate(userData, {
        onSuccess: () => {
            message.success('User created successfully!');
            form.resetFields();
        },
        onError: () => {
            message.error('Failed to create user');
        },
        });
    };

    return (
    <Form
      form={form}
      layout='vertical'
      onFinish={onFinish}
      initialValues={{ isActive: true }}
    //   onValuesChange={onValuesChange}
    >
        <Form.Item label="Contact" name="contact" 
            rules={[
            { required: true, message: 'Please enter contact' },
            { pattern: /^\d+$/, message: 'Contact must be numeric' },
            ]}
        >
            <Input placeholder="Enter Contact" />
        </Form.Item>

        <Form.Item label="Username" name="username" 
            rules={[{ required: true }]}>
            <Input placeholder="Enter Username" />
        </Form.Item>

        <Form.Item 
        // label="Chekbox"
        name="isActive" valuePropName="checked">
            <Checkbox>IsActive</Checkbox>
        </Form.Item>

        <Form.Item >
            <Button type="primary" htmlType="submit" loading={isPending}>
            {isPending ? 'Submitting...' : 'Submit'}
            </Button>
        </Form.Item>
    </Form>
    )
}

export default UserForm
