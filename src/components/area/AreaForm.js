import React, { useState, useEffect, Fragment } from 'react';

const AreaForm = ({createArea, currentarea, setRefresh, refresh, updateArea, isnew, setIsnew}) => {
    
    const [area, setArea] = useState({
        ID: '',
        name: '',
        leader_ID: ''
    });

    const [error, setError] = useState(false);

    const updateState = (e) => {
        setArea({
            ...area,
            [e.target.name]: e.target.value
        });
    }

    const { ID, name, leader_ID } = area;

    useEffect(() => {
        if (currentarea) {
            setArea(currentarea);
        }
    }, [currentarea]);

    const submit = (e) => {
        e.preventDefault();
        
        if (ID === '' || name.trim() === '' || leader_ID === '') {
            setError(true);
            return;
        }
        setError(false);

        if (isnew) {
            createArea(area);
        } else {
            updateArea(area);
            setIsnew(true);
        }

        setRefresh(!refresh);

        setArea({
            ID: '',
            name: '',
            leader_ID: ''
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
                    placeholder="Area's name"
                    onChange={updateState}
                    value={name}
                />
                <label>ID</label>
                <input
                    type="number"
                    name="ID"
                    className="u-full-width"
                    placeholder="ID number"
                    onChange={updateState}
                    value={ID}
                />
                <label>Leader ID</label>
                <input
                    type="number"
                    name="leader_ID"
                    className="u-full-width"
                    onChange={updateState}
                    value={leader_ID}
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
                    >Create Area</button> :
                    <button 
                        type="submit"
                        className="u-full-width button-secondary"
                    >Update Area</button>
                }
            </form>
        </Fragment>
     );
}
 
export default AreaForm;