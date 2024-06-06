import React, { useState } from 'react';

function ChangeData() {
  const [inputData, setInputData] = useState('');
  const [responseData, setResponseData] = useState('');

  const handleChange = (e) => {
    setInputData(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('http://172.16.2.195:8080/nextgen_v1/api/edit_book_price', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newData: inputData }),
      });

      const data = await response.json();
      setResponseData(data.message); // Assuming API returns a message
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h2>Change Desc</h2>
      <input
        type="text"
        value={inputData}
        onChange={handleChange}
        placeholder="Enter new data"
      />
      <button onClick={handleSubmit}>Submit</button>
      {responseData && <p>{responseData}</p>}
    </div>
  );
}

export default ChangeData;