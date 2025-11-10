import React from "react";

function Universe() {
  return (
    <div className="container">
      <div className="text-center mt-5 p-5">
        <h1 className="mb-4">The Zerodha Universe</h1>
        <p>
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row">
        <div className="col-md-4 p-3 text-center">
          <img
            src="media/images/smallcaseLogo.png"
            alt="Smallcase Logo"
            className="img-fluid mb-3"
            style={{ height: "25%" }}
          />
          <p className="text-small text-muted">
            Thematic investing platform that helps you invest in diversified
            baskets of stocks on ETFs.
          </p>
        </div>

        <div className="col-md-4 p-3 text-center">
          <img
            src="media/images/streakLogo.png"
            alt="Streak Logo"
            className="img-fluid mb-3"
            style={{ height: "25%" }}
          />
          <p className="text-small text-muted">
            Systematic trading platform that allows you to create and backtest
            strategies without coding.
          </p>
        </div>

        <div className="col-md-4 p-3 text-center">
          <img
            src="media/images/sensibullLogo.svg"
            alt="Sensibull Logo"
            className="img-fluid mb-3"
            style={{ height: "25%" }}
          />
          <p className="text-small text-muted">
            Options trading platform that lets you create strategies, analyze
            positions, and examine data points like open interest, FII/DII, and
            more.
          </p>
        </div>

        <div className="col-md-4 p-3 text-center">
          <img
            src="media/images/zerodhaFundhouse.png"
            alt="Zerodha Fundhouse Logo"
            className="img-fluid mb-3"
            style={{ height: "25%" }}
          />
          <p className="text-small text-muted">
            Our asset management venture that is creating simple and transparent
            index funds to help you save for your goals.
          </p>
        </div>

        <div className="col-md-4 p-3 text-center">
          <img
            src="media/images/goldenpiLogo.png"
            alt="GoldenPi Logo"
            className="img-fluid mb-3"
            style={{ height: "25%" }}
          />
          <p className="text-small text-muted">
            Investment research platform that offers detailed insights on
            stocks, sectors, supply chains, and more.
          </p>
        </div>

        <div className="col-md-4 p-3 text-center">
          <img
            src="media/images/dittoLogo.png"
            alt="Ditto Logo"
            className="img-fluid mb-3"
            style={{ height: "25%" }}
          />
          <p className="text-small text-muted">
            Personalized advice on life and health insurance. No spam and no
            mis-selling. Sign up for free.
          </p>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{ width: "18%", margin: "0 auto" }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
}

export default Universe;
