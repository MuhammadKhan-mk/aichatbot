import React, { useState, useEffect } from 'react';
import Playground from './Playground';
import UnPlayground from './UnPlayground';

function Index() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3005/api/scrap_data_site')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
      {data.length > 0 ? <Playground data={data} /> : <UnPlayground />}
    </>
  );
}

export default Index;