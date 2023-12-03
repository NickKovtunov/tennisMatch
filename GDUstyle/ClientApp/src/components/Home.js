import React, { useState } from 'react';
import { Users } from './Users'
import { AddUser } from './AddUser'

export function Home() {
    const [data, setData] = useState('');
    const addedUser = (childdata) => {
        setData(childdata);
    }
    const addUserCallBack = (childdata) => {
        addedUser(childdata)
    }
    return (
        <>
            <h1>5.2. Внутренние визуальные коммуникации</h1>
            <AddUser addUserCallBack={addUserCallBack}></AddUser>
            <Users addedUser={data}></Users>
        </>
    );
}
