import React from "react";

function Pricing() {
  return (
    // Container
    <div className="container p-3">
      <div className="row p-5">
        {/* Left Half */}
        <div className="col-4 p-3">
          <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
          <p className="text-muted">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" style={{ textDecoration: "none" }}>
            See pricing <i class="fa-solid fa-arrow-right"></i>
          </a>
        </div>

        {/* Right Half */}
        <div className="col-8 p-3">
          <div className="row p-5">
            <div className="col-4 text-center d-flex align-items-center">
              <div className="col-6">
                <img
                  src="media/images/pricing0.svg"
                  style={{ width: "100%" }}
                />
              </div>
              <div className="col-6">
                <span className="text-muted" style={{ fontSize: "10px" }}>
                  Free account opening
                </span>
              </div>
            </div>
            <div className="col-4 d-flex align-items-center">
              <div className="col-6">
                <img
                  src="media/images/pricingEquity.svg"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="col-6">
                <span className="text-muted" style={{ fontSize: "10px" }}>
                  Free equity delivery and direct mutual funds
                </span>
              </div>
            </div>
            <div className="col-4 d-flex align-items-center">
              <div className="col-6">
                <img
                  src="media/images/other-trades.svg"
                  style={{ width: "100%" }}
                />
              </div>

              <div className="col-6">
                <span className="text-muted" style={{ fontSize: "10px" }}>
                  Intraday and F&O
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
