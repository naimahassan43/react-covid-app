import React, { useEffect, useState } from "react";
import "./Covid.css";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <section>
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
          <li className="card">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>total</span> recovered
                </p>
                <p className="card-total card-small">{data.recovered}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>Total</span> CONFiRmed
                </p>
                <p className="card-total card-small">{data.confirmed}</p>
              </div>
            </div>
          </li>
          <li className="card">
            <div className="card-main">
              <div className="card-inner">
                <p className="card-name">
                  <span>total</span> death
                </p>
                <p className="card-total card-small">{data.deaths}</p>
              </div>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Covid;
