import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

function Dashboard() {
  const [responders, setResponders] = useState([]);

  // Initialize the socket connection
  useEffect(() => {
    const socket = io('http://localhost:5000'); // Replace with your backend URL in production

    // Listen for updates on responder locations
    socket.on('responderLocationUpdate', (updatedResponder) => {
      setResponders((prevResponders) => {
        const index = prevResponders.findIndex(
          (responder) => responder.id === updatedResponder.id
        );

        if (index !== -1) {
          // Update the existing responder
          const updatedResponders = [...prevResponders];
          updatedResponders[index] = updatedResponder;
          return updatedResponders;
        } else {
          // Add a new responder
          return [...prevResponders, updatedResponder];
        }
      });
    });

    // Cleanup the socket connection on component unmount
    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Responder Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {responders.map((responder) => (
            <tr key={responder.id}>
              <td>{responder.name}</td>
              <td>{responder.status}</td>
              <td>
                {responder.location.lat}, {responder.location.lng}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Dashboard;
