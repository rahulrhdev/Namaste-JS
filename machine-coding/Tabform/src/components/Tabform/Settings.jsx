import React from "react";

const Settings = ({ data, setData }) => {
  const handleData = (e) => {
    setData(prevState => ({
      ...prevState,
      theme: e.target.name
    }))
  }
  const { theme } = data
  return (
    <div>
      <div className="card">
        <label htmlFor="dark">
          <input
            type="radio"
            name="dark"
            checked={theme == 'dark'}
            onChange={handleData}
          />
          Dark
        </label>
        <label htmlFor="light">
          <input
            type="radio"
            name="light"
            checked={theme == 'light'}
            onChange={handleData}
          />
          Light
        </label>
      </div>
    </div>
  );
};

export default Settings;
