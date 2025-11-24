import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
  kiteConnect,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        {/* LEFT SIDE TEXT */}
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          <div>
            {/* Learn More Link */}
            {learnMore && (
              <a
                href={learnMore}
                style={{ textDecoration: "none", marginRight: "2rem" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn More <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}

            {/* Kite Connect Link (optional) */}
            {kiteConnect && (
              <a
                href={kiteConnect}
                style={{ textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                Try Demo <i className="fa-solid fa-arrow-right"></i>
              </a>
            )}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="col-7">
          <img src={imageURL} alt={productName} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
