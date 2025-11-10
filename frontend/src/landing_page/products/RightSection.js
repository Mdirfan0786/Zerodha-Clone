import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  kiteConnect,
  learnMore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>
          <div>
            <a href={learnMore} style={{ textDecoration: "none" }}>
              {learnMore}{" "}
              <a href={kiteConnect} style={{ textDecoration: "none" }}>
                {kiteConnect} <i class="fa-solid fa-arrow-right"></i>
              </a>
            </a>
          </div>
        </div>
        <div className="col-7">
          <img src={imageURL} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
