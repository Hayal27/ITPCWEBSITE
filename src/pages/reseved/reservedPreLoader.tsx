import React from 'react';

const Preloader: React.FC = () => (
  <div id="preloader">
    <div id="loading-center">
      <div className="loader">
        <div className="loader-outter" />
        <div className="loader-inner" />
      </div>
    </div>
  </div>
);

export default Preloader;