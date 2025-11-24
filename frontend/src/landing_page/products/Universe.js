import React from "react";

function Universe() {
  return (
    <div className="container">
      {/* Heading */}
      <div className="text-center mt-5 p-5">
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      {/* Grid Start */}
      <div className="row g-4">
        <div className="col-md-4 text-center">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase"
            className="img-fluid mb-3"
            style={{ maxHeight: "80px" }}
          />
          <p className="text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 text-center">
          <img
            src="media/images/streakLogo.png"
            alt="Streak"
            className="img-fluid mb-3"
            style={{ maxHeight: "80px" }}
          />
          <p className="text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4 text-center">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull"
            className="img-fluid mb-3"
            style={{ maxHeight: "80px" }}
          />
          <p className="text-muted">
            Options trading platform to create strategies, analyze positions,
            and examine market data.
          </p>
        </div>

        <div className="col-md-4 text-center">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse"
            className="img-fluid mb-3"
            style={{ maxHeight: "80px" }}
          />
          <p className="text-muted">
            Our asset management venture creating simple and transparent index
            funds.
          </p>
        </div>

        <div className="col-md-4 text-center">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi"
            className="img-fluid mb-3"
            style={{ maxHeight: "80px" }}
          />
          <p className="text-muted">
            Investment research platform offering insights on stocks, sectors,
            supply chains and more.
          </p>
        </div>

        <div className="col-md-4 text-center">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto"
            className="img-fluid mb-3"
            style={{ maxHeight: "80px" }}
          />
          <p className="text-muted">
            Personalized advice on life and health insurance. No spam, no
            mis-selling.
          </p>
        </div>
      </div>

      {/* Sign Up Button */}
      <div className="text-center mt-4 mb-5">
        <button className="btn btn-primary fs-5 px-4 py-2">
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
