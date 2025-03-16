import { useContext, useState } from "react";
import { Col, Row, Button } from "react-bootstrap";
import { CalcContext } from "../store/CalcContext.jsx";

const CalcButtons = () => {
  const { inputVal, handleChange, calculate } = useContext(CalcContext);
  const [buttons] = useState([
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "/",
    "8",
    "9",
    "*",
    "0",
    ".",
    "=",
  ]);

  const handleClick = (event) => {
    let buttonText = event.target.innerText;
    buttonText.trim() !== "=" ? handleChange(buttonText) : calculate(inputVal);
  };

  return (
    <>
      <Row>
        {buttons.map((button, index) => (
          <Col xs={button === "=" ? 12 : 4} key={index} className="mb-1">
            <Button
              onClick={(event) => handleClick(event)}
              className="d-block w-100"
              size="lg"
              variant="outline-warning"
            >
              {button}
            </Button>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CalcButtons;
