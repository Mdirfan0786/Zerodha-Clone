import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const linkStyle = {
    textDecoration: "none",
    color: "#666666",
  };

  const bottomLinkStyle = {
    textDecoration: "none",
    color: "#A4ABAD",
    marginRight: "1rem",
  };

  return (
    <footer style={{ backgroundColor: "rgb(250, 250, 250)" }}>
      <div className="container border-top mt-5">
        {/* TOP ROW */}
        <div className="row mt-5">
          <div className="col">
            <img
              src="media/images/logo.svg"
              style={{ width: "50%" }}
              alt="logo"
            />
            <p>
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>

          {/* COMPANY */}
          <div className="col" style={{ lineHeight: "2" }}>
            <p className="fw-bold">Company</p>
            <Link style={linkStyle}>About</Link>
            <br />
            <Link style={linkStyle}>Products</Link>
            <br />
            <Link style={linkStyle}>Pricing</Link>
            <br />
            <Link style={linkStyle}>Referral programme</Link>
            <br />
            <Link style={linkStyle}>Careers</Link>
            <br />
            <Link style={linkStyle}>Zerodha.tech</Link>
            <br />
            <Link style={linkStyle}>Press & media</Link>
            <br />
            <Link style={linkStyle}>Zerodha cares (CSR)</Link>
            <br />
          </div>

          {/* SUPPORT */}
          <div className="col" style={{ lineHeight: "2" }}>
            <p className="fw-bold">Support</p>
            <Link style={linkStyle}>Contact</Link>
            <br />
            <Link style={linkStyle}>Support portal</Link>
            <br />
            <Link style={linkStyle}>Z-Connect blog</Link>
            <br />
            <Link style={linkStyle}>List of charges</Link>
            <br />
            <Link style={linkStyle}>Downloads & resources</Link>
            <br />
          </div>

          {/* ACCOUNT */}
          <div className="col" style={{ lineHeight: "2" }}>
            <p className="fw-bold">Account</p>
            <Link style={linkStyle}>Open an account</Link>
            <br />
            <Link style={linkStyle}>Fund transfer</Link>
            <br />
            <Link style={linkStyle}>60 day challenge</Link>
            <br />
          </div>
        </div>

        {/* LONG DISCLAIMERS */}
        <div className="mt-5 text-muted" style={{ fontSize: "14px" }}>
          <p>
            Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
            INZ000031633...
          </p>

          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal...
          </p>

          <p>Investments in securities market are subject to market risks...</p>

          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs...
          </p>
        </div>

        {/* BOTTOM LINKS */}
        <ul className="text-muted p-0 mt-4" style={{ listStyle: "none" }}>
          <Link style={bottomLinkStyle}>NSE</Link>
          <Link style={bottomLinkStyle}>BSE</Link>
          <Link style={bottomLinkStyle}>MCX</Link>
          <Link style={bottomLinkStyle}>Terms & conditions</Link>
          <Link style={bottomLinkStyle}>Policies & procedures</Link>
          <Link style={bottomLinkStyle}>Privacy policy</Link>
          <Link style={bottomLinkStyle}>Disclosure</Link>
          <Link style={bottomLinkStyle}>For investor's attention</Link>
          <Link style={bottomLinkStyle}>Investor charter</Link>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
