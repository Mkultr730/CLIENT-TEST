import React, { useState, Fragment, useEffect } from 'react';

const UserForm = ({createUser, currentuser, setRefresh, refresh, updateUser, isnew, setIsnew}) => {

    const [user, setUser] = useState({
        name: '',
        lastname: '',
        birthdate: '',
        email: '',
        ID: '',
        area_ID: '',
        salary: ''
    });

    const [error, setError] = useState(false);

    const updateState = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    const { name, lastname, birthdate, email, ID, area_ID, salary } = user;

    useEffect(() => {
        if (currentuser) {
            setUser(currentuser);
        }
    }, [currentuser]);

    const submit = (e) => {
        e.preventDefault();

        if (name.trim() === '' || lastname.trim() === '' || birthdate === '' || email.trim() === '' || ID === '' || area_ID === '' || salary === '') {
            setError(true);
            return;
        }
        setError(false);

        if (isnew) {
            createUser(user);
        } else {
            updateUser(user);
            setIsnew(true);
        }

        setRefresh(!refresh);

        setUser({
            name: '',
            lastname: '',
            birthdate: '',
            email: '',
            ID: '',
            area_ID: '',
            salary: ''
        });
    }

    return ( 
        <Fragment>
            { error ? <p>All fields are requiered</p> : null }
        <form
            onSubmit={submit}
        > 
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    className="u-full-width"
                    placeholder="Name"
                    onChange={updateState}
                    value={name}
                />

                <label>Last Name</label>
                <input
                    type="text"
                    name="lastname"
                    className="u-full-width"
                    placeholder="Last Name"
                    onChange={updateState}
                    value={lastname}
                />
                <label>Birth Date</label>
                <input
                    type="date"
                    name="birthdate"
                    className="u-full-width"
                    onChange={updateState}
                    value={ birthdate }
                />
                <label>Email</label>
                <input 
                    type="email"
                    name="email"
                    className="u-full-width"
                    placeholder="Email"
                    onChange={updateState}
                    value={email}
                />
                <label>ID</label>
                <input 
                    type="number"
                    name="ID"
                    className="u-full-width"
                    placeholder="ID Number"
                    onChange={updateState}
                    value={ID}
                />
                <label>Area ID</label>
                <input 
                    type="number"
                    name="area_ID"
                    className="u-full-width"
                    placeholder="ID Number"
                    onChange={updateState}
                    value={area_ID}
                />
                <label>Salary</label>
                <input 
                    type="number"
                    name="salary"
                    className="u-full-width"
                    placeholder="Salary"
                    onChange={updateState}
                    value={salary}
                />
                <label>State</label>
                <select name="cars" id="cars">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>

                { isnew? 
                    <button 
                        type="submit"
                        className="u-full-width button-primary"
                    >Create User</button> :
                    <button 
                        type="submit"
                        className="u-full-width button-secondary"
                    >Update User</button>
                }

            </form>
            </Fragment>
     );
}
 
export default UserForm;