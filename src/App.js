// App.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AddSiteForm from './AddSiteForm';
import SitesTable from './SiteTable';
import './App.css';

const App = () => {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get('http://localhost:3001/sites').then(response => {
        setSites(response.data);
      });
    }, 120000);

    return () => clearInterval(interval);
  }, []);

  return (
    <center>
      <AddSiteForm sites={sites} setSites={setSites} />
      <SitesTable sites={sites} />
    </center>
  );
};

export default App;

