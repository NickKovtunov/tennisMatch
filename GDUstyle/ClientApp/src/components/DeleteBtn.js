import React from 'react';
import { Button } from 'antd';
import axios from 'axios'

export function DeleteBtn({ userId, deleteUserCallBack }) {
    const deleteUser = () => {
        let obj = {
            Id: userId
        }
        axios.post('weatherforecast/DeleteUser', obj)
            .then(response => {
                deleteUserCallBack(response)
            })
    };

    return (
        <Button type="primary" ghost onClick={deleteUser}>Удалить</Button>
    );
};
