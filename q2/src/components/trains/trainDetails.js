// TrainDetails.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { isAuthenticated } from '../auth/auth'; // Import the isAuthenticated function

const TrainDetails = (props) => {
  const [train, setTrain] = useState(null);

  useEffect(() => {
    if (isAuthenticated()) {
      const { id } = props.match.params;
      // Make the GET request to fetch details of a specific train
      axios.get(`http://20.244.56.144:80/train/trains/${id}`)
        .then((response) => setTrain(response.data))
        .catch((error) => console.error('Error fetching train details:', error));
    }
  }, [props.match.params]);

  if (!isAuthenticated() || !train) {
    // If the user is not authenticated or the train data is not fetched yet, don't render the component
    return null;
  }

  return (
    <div>
      <h2>Train Details</h2>
      <p>Name: {train.name}</p>
      <p>Route: {train.route}</p>
      {/* Add more train details as needed */}
    </div>
  );
};

export default TrainDetails;
