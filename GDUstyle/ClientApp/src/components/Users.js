import { useEffect, useState} from 'react'
import { Collapse, Alert } from 'antd';
import axios from 'axios'
import { DeleteBtn } from './DeleteBtn'

export function Users({ addedUser }) {
    const [users, setUsers] = useState([])

    function getUsers() {
        axios.get('weatherforecast/GetUsers')
            .then(response => {
                let objects = []
                response.data.forEach(function (item, index, array) {
                    let object = {
                        key: item.id,
                        label: item.name,
                        children:
                        <div>
                            <Alert message="При печати выбрать альбомную раскладку и размер бумаги А3" type="info" className="customAlert"/>
                            <DeleteBtn userId={item.id} deleteUserCallBack={deleteUserCallBack}></DeleteBtn>
                            <div className="wrapper">
                                <div className="rectangle rectangle_white">
                                    <div className="tablet_department">
                                        {item.branch}
                                    </div>
                                    <div className="tablet_post">
                                        {item.post}
                                    </div>
                                    <div className="tablet_name">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <div className="wrapper wrapper2">
                                <div className="rectangle rectangle_blue">
                                    <div className="tablet_department">
                                        {item.branch}
                                    </div>
                                    <div className="tablet_post">
                                        {item.post}
                                    </div>
                                    <div className="tablet_name">
                                        {item.name}
                                    </div>
                                </div>
                            </div>
                        </div>,
                    }
                    objects.push(object)
                });
                setUsers(objects)
            })
    }

    const deleteUserCallBack = (childdata) => {
        getUsers()
    }

    useEffect(() => {
        getUsers()
    }, [])

    useEffect(() => {
        getUsers()
    }, [addedUser])

    const onChange = (key) => {
        console.log(key);
    };

    return (
        <>
            {users && users.length > 0 &&
                <Collapse accordion size="large" items={users} onChange={onChange} />
            }
        </>
    )
}
