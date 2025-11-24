import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-2 text-muted">
          To create a ticket, select a relevant topic
        </h1>

        {/* Column 1 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="text-muted mb-3">
            <i className="fa-solid fa-circle-plus"></i> Account Opening
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Resident individual
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Minor
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Non Resident Indian (NRI)
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Company, Partnership, HUF and LLP
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Glossary
          </a>
        </div>

        {/* Column 2 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="text-muted mb-3">
            <i className="fa-solid fa-user"></i> Your Zerodha Account
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Your Profile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Account modification
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Client Master Report (CMR)
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Nomination
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Transfer & conversion
          </a>
        </div>

        {/* Column 3 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="text-muted mb-3">
            <i className="fa-solid fa-chart-simple"></i> Kite
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            IPO
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Trading FAQs
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            MTF & Margins
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Charts & orders
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Alerts & Nudges
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            General
          </a>
        </div>

        {/* Column 4 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="text-muted mb-3">
            <i className="fa-regular fa-credit-card"></i> Funds
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add money
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Withdraw money
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Add bank accounts
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            eMandates
          </a>
        </div>

        {/* Column 5 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="text-muted mb-3">
            <i className="fa-solid fa-chart-pie"></i> Console
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Portfolio
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Corporate actions
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Funds statement
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Reports
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Profile
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Segments
          </a>
        </div>

        {/* Column 6 */}
        <div className="col-4 p-5 mt-2 mb-2">
          <h4 className="text-muted mb-3">
            <i className="fa-solid fa-circle-notch"></i> Coin
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Mutual funds
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            NPS
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Features
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            Payments & Orders
          </a>
          <br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.5" }}>
            General
          </a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
