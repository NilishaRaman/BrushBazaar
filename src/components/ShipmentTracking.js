import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShipmentTracking = () => {
  const [shipments, setShipments] = useState([]);

  useEffect(() => {
    const fetchShipments = async () => {
      try {
        const response = await axios.get('http://localhost:8090/api/shipments');
        setShipments(response.data);
      } catch (error) {
        console.error('Error fetching shipments:', error);
      }
    };
    
    fetchShipments();
  }, []);

  return (
    <div>
      <h2>Shipment Tracking</h2>
      <ul>
        {shipments.map(shipment => (
          <li key={shipment.id}>
            <p>Order ID: {shipment.order.id}</p>
            <p>Tracking Number: {shipment.trackingNumber}</p>
            <p>Status: {shipment.status}</p>
            <p>Shipment Date: {new Date(shipment.shipmentDate).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipmentTracking;
