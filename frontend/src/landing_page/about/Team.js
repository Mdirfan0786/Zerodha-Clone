import React from "react";

function Team() {
  return (
    <div className="container">
      {/* Header */}
      <div className="row p-3 mt-5 border-top">
        <div className="col-12 text-center">
          <h1>People</h1>
        </div>
      </div>

      {/* Main Team Section */}
      <div
        className="row p-4 text-muted"
        style={{ lineHeight: "1.8", fontSize: "1.2em" }}
      >
        {/* Left Image Section */}
        <div className="col-md-6 col-12 p-3 text-center">
          <img
            src="media/images/irfanImg.jpg"
            alt="Profile"
            style={{
              borderRadius: "100%",
              width: "55%",
              boxShadow: "0 0 15px rgba(0,0,0,0.1)",
            }}
          />
          <h4 className="mt-4">Md Irfan</h4>
          <h6 className="text-muted">Founder, CEO</h6>
        </div>

        {/* Right Text Section */}
        <div className="col-md-6 col-12 p-3">
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade-long stint as a trader. Today,
            Zerodha has transformed the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>

          <p>
            Connect on{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Homepage
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              TradingQnA
            </a>{" "}
            /{" "}
            <a href="#" style={{ textDecoration: "none" }}>
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
