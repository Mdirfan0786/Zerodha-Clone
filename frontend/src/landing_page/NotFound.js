import React from "react";

function NotFound() {
  return (
    <div
      className="container d-flex align-items-center justify-content-center"
      style={{ minHeight: "70vh" }}
    >
      <div className="text-center">
        <h1 className="fw-bold mb-3" style={{ fontSize: "3rem" }}>
          404
        </h1>
        <h4 className="text-muted mb-3">Page not found</h4>
        <p className="text-secondary">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>
      </div>
    </div>
  );
}

export default NotFound;
