import React from "react";

function Brokerage() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 text-center border-top">
        {/* LEFT SECTION */}
        <div className="col-md-8 p-4">
          <a href="/brokerage-calculator" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">Brokerage calculator</h3>
          </a>

          <ul
            style={{ textAlign: "left", lineHeight: "2.2", fontSize: "14px" }}
            className="text-muted mt-3"
          >
            <li>
              Call & Trade and RMS auto-squareoff: Additional charges of ₹50 +
              GST per order.
            </li>
            <li>Digital contract notes will be sent via e-mail.</li>
            <li>
              Physical copies of contract notes, if required, shall be charged
              ₹20 per contract note. Courier charges apply.
            </li>
            <li>
              For NRI account (non-PIS): 0.5% or ₹100 per executed order
              (whichever is lower).
            </li>
            <li>
              For NRI account (PIS): 0.5% or ₹200 per executed order (whichever
              is lower).
            </li>
            <li>
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20.
            </li>
          </ul>
        </div>

        {/* RIGHT SECTION */}
        <div className="col-md-4 p-4 d-flex justify-content-center align-items-start">
          <a href="/list-of-charges" style={{ textDecoration: "none" }}>
            <h3 className="fs-5">List of charges</h3>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
