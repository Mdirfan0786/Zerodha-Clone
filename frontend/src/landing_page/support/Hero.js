import React from "react";

function Hero() {
  return (
    <div className="container-fluid" id="SupportHero">
      <div className="p-3" id="SupportWrapper">
        <h4>Support Portal</h4>
        <a href="" style={{ borderBottom: "1px solid #fff" }}>
          Track tickets
        </a>
      </div>
      <div className="row p-5 mt-3 mb-5">
        <div className="col p-3 Support-anchers">
          <h1 className="fs-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            placeholder="Eg: how do i ativate F&O, why is my order getting rejected ..."
            className="mt-5 mb-3"
          />
          <br />
          <a href="">Track account opening</a>
          <a href="">Track segment activation</a>
          <a href="">Intraday margins</a>
          <a href="">Kite user manual</a>
        </div>
        <div className="col p-5">
          <h1 className="fs-3">Featured</h1>
          <ol style={{ lineHeight: "2.5" }}>
            <li>
              <a href="">Surveillance measure on scrips - June 2025</a>
            </li>
            <li>
              <a href="">Rights Entitlements listing in June 2025</a>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Hero;
