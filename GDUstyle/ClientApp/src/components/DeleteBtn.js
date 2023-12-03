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
    const print = () => {
        window.print()
    };

    return (
        <div className="clearfix addBtnWrap">
            <Button type="primary" onClick={print} className="printBtn">Напечатать</Button>
            <Button type="primary" ghost onClick={deleteUser}>Удалить</Button>
        </div>
    );
};
