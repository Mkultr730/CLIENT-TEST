import React, { Fragment, useState } from 'react';
import UserForm from './UserForm';
import List from './List';

import axios from 'axios';

const User = () => {

    

    const createUser = async (user) => {

        const body = {
            name: user.name,
            lastname: user.lastname,
            birthdate: user.birthdate,
            email: user.email,
            ID: user.ID,
            area_ID: user.area_ID,
            salary: user.salary
        }

        await axios.post('http://localhost:8100/users/create', body);
    }

    const deleteUser = async (id) =>  {
        await axios.delete(`http://localhost:8100/users/delete/${id}`);
    }

    const updateUser = async (user) => {
        const body = {
            name: user.name,
            lastname: user.lastname,
            birthdate: user.birthdate,
            email: user.email,
            ID: user.ID,
            area_ID: user.area_ID,
            salary: user.salary
        }

        const res = await axios.patch(`http://localhost:8100/users/update/${user.ID}`, body);
        console.log(res);
    }


    const [currentuser, setCurrentuser] = useState({
        name: '',
        lastname: '',
        birthdate: '',
        email: '',
        ID: '',
        area_ID: '',
        salary: ''
    });

    const [refresh, setRefresh] = useState(false);
    const [isnew, setIsnew] = useState(true);

    return ( 
        <Fragment>
            <div className="one-half column">                
                <UserForm 
                    createUser={createUser} 
                    currentuser={currentuser} 
                    refresh={refresh} 
                    setRefresh={setRefresh}
                    updateUser={updateUser}
                    isnew={isnew}
                    setIsnew={setIsnew}
                />
            </div>
            <div className="one-half column">
                <List 
                    setCurrentuser={setCurrentuser} 
                    refresh={refresh} 
                    setRefresh={setRefresh}
                    setIsnew={setIsnew}
                    deleteUser={deleteUser}
                />
            </div>
        </Fragment>
    );
}
 
export default User;