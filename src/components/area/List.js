import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import './area.css';

const List = ({setCurrentarea, refresh, setRefresh, setIsnew, deleteArea}) => {

    const [areas, setAreas] = useState([]);

    useEffect(() => {
        const users = async () => {
            const response = await axios.get(`http://localhost:8100/areas/`);
            setAreas(response.data);
        }
        users();
      }, [refresh, setRefresh]);

      const select = area => {
        setCurrentarea(area);
        setIsnew(false);
    }

    return ( 
        <Fragment>
            { areas.map( area => {
                return (
                    <div className="card" key={area.ID}>
                        <div className="card-body">
                            <h5 className="card-title"> { area.name } </h5>
                            <h6 className="card-subtitle mb-2 text-muted">{ area.leader_ID }</h6>
                            <p className="card-text">{ area.ID }</p>
                            <button 
                                type="button"
                                className="button-primary"
                                onClick={() => select(area)}
                            >Edit</button>
                            <button 
                                type="button"
                                className="btn-danger"
                                onClick={() => {
                                    deleteArea(area.ID);
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