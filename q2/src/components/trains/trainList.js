// TrainList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isAuthenticated } from '../auth/auth'; // Import the isAuthenticated function

const TrainList = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    if (isAuthenticated()) {
      // Make the GET request to fetch train data
      axios.get('http://20.244.56.144:80/train/trains')
        .then((response) => setTrains(response.data))
        .catch((error) => console.error('Error fetching trains:', error));
    }
  }, []);

  if (!isAuthenticated()) {
    // If the user is not authenticated, don't render the component
    return null;
  }

  return (
    <div>
      <h2>Trains</h2>
      <ul>
        {trains.map((train) => (
          <li key={train.id}>
            {train.name} - {train.route}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainList;