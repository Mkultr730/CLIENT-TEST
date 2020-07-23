import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import './user.css';

const List = ({setCurrentuser, refresh, setRefresh, setIsnew, deleteUser}) => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const users = async () => {
            const response = await axios.get(`http://localhost:8100/users/`);
            setUsers(response.data);
        }
        users();
      }, [refresh, setRefresh]);

    const select = user => {
        setCurrentuser(user);
        setIsnew(false);
    }

    return ( 
        <Fragment>
            { users.map( user => {
                return (
                    <div className="card" key={user.ID}>
                        <div className="card-body">
                            <h5 className="card-title">Name: { user.name } </h5>
                            <h6 className="card-subtitle mb-2 text-muted">Email: { user.email }</h6>
                            <p className="card-text">User ID:{ user.ID }</p>
                            <button 
                                type="button"
                                className="button-primary"
                                onClick={() => select(user)}
                            >Edit</button>
                            <button 
                                type="button"
                                className="btn-danger"
                                onClick={() => {
                                    deleteUser(user.ID);
                                    setRefresh(!refresh);
                                }}
                            >Delete</button>
                        </div>
                    </div>
                );
            }) }
        </Fragment>
    );
}
 
export default List;