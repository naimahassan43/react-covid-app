import React, { useEffect } from "react";

const Covid = () => {
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    // getCovidData();
  }, []);
  return (
    <div>
      <h1>LIVE</h1>
      <h2>COVID-19 CORONAVIRUS TRACKER</h2>

      <ul>
        <li className="card">
          <div className="card-main">
            <div className="card-inner">
              <p className="card-name">
                <span>OUR</span> COUNTRY
              </p>
              <p className="card-total card-small">INDIA</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Covid;
