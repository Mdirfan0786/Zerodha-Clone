import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container-fluid" id="SupportHero">
      {/* TOP BAR */}
      <div className="p-3" id="SupportWrapper">
        <h4>Support Portal</h4>

        {/* Use Link instead of anchor to avoid reload */}
        <Link to="/tickets" style={{ borderBottom: "1px solid #fff" }}>
          Track tickets
        </Link>
      </div>

      {/* MAIN CONTENT */}
      <div className="row p-5 mt-3 mb-5">
        {/* LEFT SECTION */}
        <div className="col p-3 Support-anchers">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            placeholder="Eg: how do i activate F&O, why is my order getting rejected ..."
            className="mt-5 mb-3 form-control"
            style={{ maxWidth: "550px" }}
          />

          <br />

          {/* All should be Links ideally */}
          <Link to="/open-account">Track account opening</Link>
          <Link to="/segment-activation">Track segment activation</Link>
          <Link to="/intraday-margins">Intraday margins</Link>
          <Link to="/kite-manual">Kite user manual</Link>
        </div>

        {/* RIGHT SECTION */}
        <div className="col p-5">
          <h1 className="fs-3">Featured</h1>

          <ol style={{ lineHeight: "2.5" }}>
            <li>
              <Link to="/surveillance-june-2025">
                Surveillance measure on scrips - June 2025
              </Link>
            </li>
            <li>
              <Link to="/rights-entitlements-june-2025">
                Rights Entitlements listing in June 2025
              </Link>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
