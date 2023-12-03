import { useEffect, useState} from 'react'
import { Collapse } from 'antd';
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
                        children: <DeleteBtn userId={item.id} deleteUserCallBack={deleteUserCallBack}></DeleteBtn>,
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
                <Collapse size="large" items={users} onChange={onChange} />
            }
        </>
    )
}
