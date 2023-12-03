import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
import axios from 'axios'

export function AddUser({ addUserCallBack }) {
    const [form] = Form.useForm();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };

    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const onReset = () => {
        form.resetFields();
    };

    const layout = {
        labelCol: { span: 8 },
        wrapperCol: { span: 16 },
    };

    function onFinish(values) {
        setIsModalOpen(false);
        let obj = {
            Name: values.user.Name,
            Post: values.user.Post,
            Branch: values.user.Branch,
            Deleted: false
        }
        axios.post('weatherforecast/AddUser', obj)
            .then(response => {
                addUserCallBack(response)
                onReset()
            })
    };

    return (
        <>
            <div className="clearfix addBtnWrap">
                <Button
                    type="primary"
                    onClick={showModal}
                >
                    Добавить табличку
                </Button>
            </div>
            <Modal
                title="Добавление таблички"
                open={isModalOpen}
                onOk={handleOk}
                onCancel={handleCancel}
                footer={[]}
            >
                <Form
                    {...layout}
                    name="nest-messages"
                    onFinish={onFinish}
                    style={{ maxWidth: 600 }}
                    form={form}
                >
                    <Form.Item name={['user', 'Branch']} label="Подразделение">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name={['user', 'Post']} label="Должность">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item name={['user', 'Name']} label="ФИО">
                        <Input.TextArea />
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Сохранить
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
