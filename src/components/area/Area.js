import React, { Fragment, useState } from 'react';
import AreaForm from './AreaForm';
import List from './List';

import axios from 'axios';

const Area = () => {


    const createArea = async (area) => {

        const body = {
            ID: area.ID,
            name: area.name,
            leader_ID: area.leader_ID
        }
        console.log(body);

        await axios.post('http://localhost:8100/areas/create', body);
    }

    const deleteArea = async (id) =>  {
        await axios.delete(`http://localhost:8100/areas/delete/${id}`);
    }

    const updateArea = async (area) => {
        const body = {
            ID: area.ID,
            name: area.name,
            leader_ID: area.area_ID
        }

        await axios.patch(`http://localhost:8100/areas/update/${area.ID}`, body);
    }

    const [currentarea, setCurrentarea] = useState({
        ID: '',
        name: '',
        leader_ID: ''
    });

    const [refresh, setRefresh] = useState(false);
    const [isnew, setIsnew] = useState(true);

    return ( 
        <Fragment>
            <div className="one-half column">                
                <AreaForm
                    createArea={createArea} 
                    currentarea={currentarea} 
                    refresh={refresh} 
                    setRefresh={setRefresh}
                    updateArea={updateArea}
                    isnew={isnew}
                    setIsnew={setIsnew}
                />
            </div>
            <div className="one-half column">
                <List
                    setCurrentarea={setCurrentarea} 
                    refresh={refresh} 
                    setRefresh={setRefresh}
                    setIsnew={setIsnew}
                    deleteArea={deleteArea}
                />
            </div>
        </Fragment>
    );
}
 
export default Area;