import React, { useState, useEffect } from "react";
import axios from "axios";

const Summary = () => {
  const [data, setData] = useState({
    marginAvailable: 0,
    marginUsed: 0,
    openingBalance: 0,
    holdingsCount: 0,
    pnl: 0,
    pnlPercent: 0,
    currentValue: 0,
    investment: 0,
  });

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";
    axios.get(`${API_URL}/summary`).then((res) => setData(res.data));
  }, []);

  return (
    <>
      <div className="username">
        <h6>Hi, User!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>{data.marginAvailable}</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>{data.marginUsed}</span>
            </p>
            <p>
              Opening balance <span>{data.openingBalance}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({data.holdingsCount})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={data.pnl >= 0 ? "profit" : "loss"}>
              {data.pnl}{" "}
              <small>
                {data.pnlPercent >= 0
                  ? `+${data.pnlPercent}%`
                  : `${data.pnlPercent}%`}
              </small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>{data.currentValue}</span>
            </p>
            <p>
              Investment <span>{data.investment}</span>
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
