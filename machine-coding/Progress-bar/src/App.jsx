import React, { useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  // Aria for Accessibility
  const [animatedProgress, setAnimatedProgress] = useState(0)
  useEffect(() => {
    setTimeout(() => {
      setAnimatedProgress(progress)
    }, 100)
  }, [progress])
  return (
    <div className="outer">
      <div
        className="inner"
        style={{
          // width: `${progress}%`,
          transform: `translateX(${animatedProgress -100}%)`,
          color: progress < 5 ? "black" : "white",
        }}
        role="progressbar"
        aria-valuenow={animatedProgress}
        aria-valuemax={100}
        aria-valuemin={0}
      >
        {animatedProgress}%
      </div>
    </div>
  );
};

const App = () => {
  const bars = [5, 10, 20, 30, 50, 70];
  return (
    <div className="App">
      <h1>Progress bar</h1>
      <ProgressBar progress={40} />
    </div>
  );
};

export default App;
