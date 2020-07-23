import React, { Fragment } from 'react';
import AreaForm from './AreaForm';
import List from './List';

const Area = () => {
    return ( 
        <Fragment>
            <div className="one-half column">                
                <AreaForm />
            </div>
            <div className="one-half column">
                <List />
            </div>
        </Fragment>
    );
}
 
export default Area;