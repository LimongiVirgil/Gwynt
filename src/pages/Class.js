import React, { useState, useEffect} from 'react';

export default Class => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('./cards.json')
    .then(response => response.json())
    .then(result => setData(result))
  }, [])

  console.log(data[1])

  return (
    <div className="class">
      
    </div>
  );
}
