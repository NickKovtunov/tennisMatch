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
            <p className="bookLink">Страница 75 <a href='https://saratov-tr.gazprom.ru/d/textpage/a7/167/tkfs_2023.pdf' target="_blank"> типовой книги фирменного стиля дочернего общества ПАО «Газпром»</a></p>
            <AddUser addUserCallBack={addUserCallBack}></AddUser>
            <Users addedUser={data}></Users>
        </>
    );
}
