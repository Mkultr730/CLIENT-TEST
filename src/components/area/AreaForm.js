import React from 'react';

const AreaForm = () => {
    return ( 
        <form>
            <label>Name</label>
            <input
                type="text"
                name="name"
                className="u-full-width"
                placeholder="Area's name"
            />
            <label>ID</label>
            <input
                type="number"
                name="id"
                className="u-full-width"
                placeholder="ID number"
            />
            <label>Leader ID</label>
            <input
                type="number"
                name="leaderid"
                className="u-full-width"
                placeholder="ID number"
            />
            <label>State</label>
                <select name="cars" id="cars">
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                </select>

            <button 
                type="submit"
                className="u-full-width button-primary"
            >Create Area</button>
        </form>
     );
}
 
export default AreaForm;