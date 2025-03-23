import React from 'react';
import Header from '../Header';
import MapElement from '../MapElement';

function FindSpot({ isAuthenticated }) {
  return (
    <div className="flex flex-col h-screen">
      <Header isAuthenticated={true} />
      <MapElement />
    </div>
  );
}

export default FindSpot;
