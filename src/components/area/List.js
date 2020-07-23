import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import './area.css';

const List = () => {

    const [areas, setAreas] = useState([]);


    useEffect(() => {
        axios.get(`http://localhost:8100/areas/`)
          .then(res => {
            console.log(res);
            setAreas(res.data);
          }).catch(err => {
            console.log(err);
          })
      }, [])

    return ( 
        <Fragment>
            { areas.map( area => {
                return (
                    <div className="card">
                        <div className="card-body">
                            <h5 className="card-title"> { area.name } </h5>
                            <h6 className="card-subtitle mb-2 text-muted">{ area.leader_ID }</h6>
                            <p className="card-text">{ area.ID }</p>
                            <button 
                                type="button"
                                className="button-primary"
                            >Edit</button>
                            <button 
                                type="button"
                                className="btn-danger"
                            >Delete</button>
                        </div>
                    </div>
                );
            }) }
        </Fragment>
    );
}
 
export default List;