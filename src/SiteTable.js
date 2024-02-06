import React from 'react';

const SitesTable = ({ sites }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Website</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {sites.map((site, index) => 
          <tr key={index}>
            <td>{site.name}</td>
            <td >
              <div className={site.status}>
              {site.status}
              </div>
              </td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default SitesTable;