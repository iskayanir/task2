'use client';

import React, { useState } from 'react';

export default function Home() {
  // State variables to track the color changes
  const [isColorChanged, setColorChanged] = useState(false);

  // Function to toggle background and text color
  const toggleColor = () => {
    setColorChanged(!isColorChanged);
  };

  // Style object to dynamically set background and text color
  const style = {
    backgroundColor: isColorChanged ? '#48D1CC' : '#b5a9ff',
    color: isColorChanged ? '#000000' : '#008000',
  };

  return (
    <div className="grid" style={style}>
      <div className="center padding-2 text-xl">
        <span>
        <h1 style={{ fontSize: '60px' }}>Iska's page</h1>
        <br></br>hi, this is me and my dog, Arty
        </span>
      </div>

      <div className="center padding-2">
        <img src="arty and me.jpg" alt="arty and me" width="320" height="300" />
      </div>

      <div className="center padding-2 text-xl">
        <span>
        <p>
          <em>Watch </em>
          <a href="https://www.youtube.com/shorts/366JnA5GDmI">
            <em> Arty playing with a snail</em>
          </a>
        </p>
        <p>Arty likes a lot of plays:</p>
        <ul>
          <li>run with other dogs</li>
          <li>bite everything she can</li>
          <li>pull a rope</li>
        </ul>
        </span>
      </div>

      <div className="center padding-2 text-xl">
        <p>
          <strong>A funny video about dogs:</strong>
        </p>
      </div>

      <div className="center padding-2">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/UPWd7UL7WvQ?si=1veEp7IACCQZG_24"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      </div>

      {/* Button to toggle background and text color */}
      <div className="center padding-2">
        <button onClick={toggleColor}>
          {isColorChanged ? 'Restore Color' : 'Change Color'}
        </button>
      </div>
    </div>
  );
}
