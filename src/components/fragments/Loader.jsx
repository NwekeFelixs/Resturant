import React, { useEffect, useState } from 'react';
import '../css/style.css'; // Import your CSS file

const Loader = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Simulate a 5-second delay
    const delay = 5000; // 5000 milliseconds (5 seconds)

    // Use setTimeout to set the 'loaded' state to true after the delay
    const delayTimeout = setTimeout(() => {
      setLoaded(true);
      document.body.classList.add('loaded');
    }, delay);

    return () => {
      // Clear the timeout if the component unmounts before the delay is completed
      clearTimeout(delayTimeout);
    };
  }, []);

  return (
    <div className={`preload ${loaded ? 'loaded' : ''}`} data-preaload>
      <div className="circle"></div>
      <p className="text">Grilli</p>
    </div>
  );
};

export default Loader;
