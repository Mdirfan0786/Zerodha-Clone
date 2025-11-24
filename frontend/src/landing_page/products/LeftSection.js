import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div className="row">
        {/* Left image */}
        <div className="col-7 p-5">
          <img src={imageURL} alt={`${productName} visual`} />
        </div>

        {/* Right section */}
        <div className="col-5 p-5 mt-5">
          <h1>{productName}</h1>
          <p>{productDescription}</p>

          {/* Links */}
          <div>
            <a
              href={tryDemo}
              style={{ textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Try Demo <i className="fa-solid fa-arrow-right"></i>
            </a>

            <a
              href={learnMore}
              style={{ marginLeft: "3rem", textDecoration: "none" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn More <i className="fa-solid fa-arrow-right"></i>
            </a>
          </div>

          {/* App Badges */}
          <div className="mt-3">
            <a href={googlePlay} target="_blank" rel="noopener noreferrer">
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Get it on Google Play"
              />
            </a>

            <a
              href={appStore}
              style={{ marginLeft: "3rem" }}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="media/images/appstoreBadge.svg"
                alt="Download on the App Store"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
