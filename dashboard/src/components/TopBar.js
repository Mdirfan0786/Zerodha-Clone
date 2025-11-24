import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./Menu";

const TopBar = () => {
  const [indices, setIndices] = useState({
    nifty: { value: 0, change: 0 },
    sensex: { value: 0, change: 0 },
  });

  useEffect(() => {
    const API_URL = process.env.REACT_APP_API_URL || "http://localhost:8080";
    axios.get(`${API_URL}/indices`).then((res) => {
      setIndices(res.data);
    });
  }, []);

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">{indices.nifty.value}</p>
          <p className="percent">{indices.nifty.change}%</p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">{indices.sensex.value}</p>
          <p className="percent">{indices.sensex.change}%</p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
