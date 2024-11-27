import React from "react";


const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="welcome-container">
      <div className="welcome-content">
        <h1 className="welcome-title">Welcome to Our App</h1>
        <p className="welcome-text">
          Experience the best tools and features designed just for you.
        </p>
        <button className="welcome-btn" onClick={onStart}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
