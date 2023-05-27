import React from "react";
import Col from "react-bootstrap/Col";

const CurrentDate = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
  });

  return (
    <Col className="date-container">
      <h1><u>{today}</u></h1>
    </Col>
  );
};

export default CurrentDate;