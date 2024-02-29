import React, { useEffect } from "react";
import styles from './Calculator.module.css'
import NavBar from '../../components/navBar/NavBar';
import styles_g from '../../components/styles/Global.module.css'
import Calculator from "./features/calculator/Calculator";

function CalculatorApp() {

  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.calculator_container}>
        <Calculator />
      </div>
    </div>
  );
}

export default CalculatorApp;
