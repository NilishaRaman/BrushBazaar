// src/components/ShipmentProcess.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ShipmentProcess.css'; // Make sure to create this CSS file for styling

const API_BASE_URL = 'http://localhost:8090/api/shipment';

const ShipmentProcess = ({ orderId }) => {
  const [shipmentDetails, setShipmentDetails] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShipmentDetails = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/${orderId}`);
        setShipmentDetails(response.data);
      } catch (error) {
        setError('Error fetching shipment details');
      } finally {
        setLoading(false);
      }
    };

    fetchShipmentDetails();
  }, [orderId]);

  if (loading) return <div className="loading">Loading shipment details...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="shipment-process">
      <h3>Shipment Details for Order ID: {orderId}</h3>
      {shipmentDetails ? (
        <div>
          <p>Shipment Status: {shipmentDetails.status}</p>
          <p>Estimated Delivery: {new Date(shipmentDetails.estimatedDelivery).toLocaleDateString()}</p>
          <p>Carrier: {shipmentDetails.carrier}</p>
        </div>
      ) : (
        <p>No shipment details available.</p>
      )}
    </div>
  );
};

export default ShipmentProcess;
