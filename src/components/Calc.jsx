import { Col, Card, Button } from "react-bootstrap";
import CalcInput from "./CalcInput.jsx";
import CalcButtons from "./CalcButtons.jsx";
import styles from "./Calc.module.css";

const Calc = () => {
  return (
    <>
      <Col xs={6}>
        <Card className={styles.calc}>
          <Card.Header>
            <CalcInput />
          </Card.Header>
          <Card.Body>
            <CalcButtons />
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};
export default Calc;
