import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  const equityData = [
    { label: "Available margin", value: "4,043.10", highlight: true },
    { label: "Used margin", value: "3,757.30" },
    { label: "Available cash", value: "4,043.10" },
    { hr: true },
    { label: "Opening Balance", value: "4,043.10" },
    { label: "Opening Balance", value: "3736.40" },
    { label: "Payin", value: "4064.00" },
    { label: "SPAN", value: "0.00" },
    { label: "Delivery margin", value: "0.00" },
    { label: "Exposure", value: "0.00" },
    { label: "Options premium", value: "0.00" },
    { hr: true },
    { label: "Collateral (Liquid funds)", value: "0.00" },
    { label: "Collateral (Equity)", value: "0.00" },
    { label: "Total Collateral", value: "0.00" },
  ];

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI</p>

        <button className="btn btn-green">Add funds</button>
        <button className="btn btn-blue">Withdraw</button>
      </div>

      <div className="row">
        {/* Equity Section */}
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            {equityData.map((item, i) =>
              item.hr ? (
                <hr key={i} />
              ) : (
                <div className="data" key={i}>
                  <p>{item.label}</p>
                  <p className={`imp ${item.highlight ? "colored" : ""}`}>
                    {item.value}
                  </p>
                </div>
              )
            )}
          </div>
        </div>

        {/* Commodity Section */}
        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link className="btn btn-blue">Open Account</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
