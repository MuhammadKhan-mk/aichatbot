import React, { useState, useEffect } from 'react';
import '../live-chat.css';
import { BsTrash } from 'react-icons/bs';

function extractWebsiteName(url) {
  try {
    const { hostname } = new URL(url);
    return hostname;
  } catch (error) {
    console.error('Invalid URL:', url);
    return 'Unknown';
  }
}

function GetDetails() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/api/scrap_data_site')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleDelete = (id) => {
    const isConfirmed = window.confirm("Are you sure you want to delete this record permanently?");
  
    if (isConfirmed) {
      fetch(`http://localhost:3005/api/deleteurl/${id}`, {
        method: 'DELETE',
      })
        .then(response => {
          if (response.ok) {
            setData(data.filter(item => item.id !== id)); 
          } else {
            console.error(`Failed to delete record with ID ${id}`);
          }
        })
        .catch(error => console.error('Error deleting record:', error));
    } else {
      console.log('Deletion cancelled by user.');
    }
  };
  
  

  return (
    <div className="scrollAreaViewport">
      <table className="data-table">
        <thead>
          <tr>
            <th>Website Name</th>
            <th>Data Source</th>
            <th>Used By</th>
            <th>Last Updated</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} id={item.id}>
              <td>{extractWebsiteName(item.url)}</td>
              <td>Website</td>
              <td>Azister</td>
              <td>{item.timestamp}</td>
              <td>
                <button onClick={() => handleDelete(item.id)}><BsTrash /></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default GetDetails;
