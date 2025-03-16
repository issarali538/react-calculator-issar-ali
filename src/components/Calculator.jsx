import { Col, Container, Row } from "react-bootstrap";
import styles from "./Calculator.module.css";
import Calc from "./Calc.jsx";
import { CalcContext } from "../store/CalcContext.jsx";
import { useState } from "react";

const Calculator = () => {
  let [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState([]);

  const handleChange = (val) => {
    if (val !== "C" && val !== "=") {
      setInputVal((prev) => {
        let updateValue = prev;
        updateValue += val;
        return updateValue;
      });
    } else if (val === "C") {
      setInputVal((prev) => {
        let updateValue = prev;
        updateValue = "";
        return updateValue;
      });
    }
  };

  const handleHistory = (hist) => {
    setHistory((prev) => {
      let updateHistory = [...prev, hist];
      return updateHistory;
    });
  };

  const calculate = (cal) => {
    if (cal.length !== 0) {
      handleHistory(cal);
      let result = eval(cal);
      if (result === Infinity) {
        setInputVal("0");
      } else {
        setInputVal(result.toString());
      }
    }
  };

  return (
    <>
      <CalcContext.Provider
        value={{
          inputVal,
          history,
          handleChange,
          handleHistory,
          calculate,
        }}
      >
        <div className={styles.calculator}>
          <Container>
            <Row className="justify-content-center">
              <Calc />
            </Row>
          </Container>
        </div>
      </CalcContext.Provider>
    </>
  );
};
export default Calculator;
