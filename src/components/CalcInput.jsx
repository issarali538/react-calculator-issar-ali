import { useContext } from "react";
import { Form } from "react-bootstrap";
import styles from "./CalcInput.module.css";
import { CalcContext } from "../store/CalcContext.jsx";

const CalcInput = () => {
  const { inputVal, handleChange } = useContext(CalcContext);
  return (
    <>
      <Form.Control
        value={inputVal}
        onChange={(event) => handleChange(event.target.value)}
        readOnly={true}
        className={`${styles.calcInput} disabled`}
        type="text"
      />
    </>
  );
};
export default CalcInput;
