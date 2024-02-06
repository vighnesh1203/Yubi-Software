import React, { useState } from 'react';
import axios from 'axios';

const AddSiteForm = ({ sites, setSites }) => {
  const [newSite, setNewSite] = useState('');

  const addSite = (event) => {
    event.preventDefault();
    const siteObject = {
      name: newSite,
      status: 'success'
    };

    axios.post('http://localhost:3001/sites', siteObject).then(response => {
      setSites(sites.concat(response.data));
      setNewSite('');
    });
  };

  const handleSiteChange = (event) => {
    setNewSite(event.target.value);
  };

  return (
    <form onSubmit={addSite}>
      <input className='inputbox' value={newSite} onChange={handleSiteChange} placeholder='Enter Website here to be monitored'/><br></br>
      <button type="submit">Add</button>
    </form>

  );
};

export default AddSiteForm;
