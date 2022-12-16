import React from 'react';
import CalculatorView from "../components/CalculatorView/CalculatorView";
import CalculatorLog from "../components/CalculatorLog/CalculatorLog";

const Calculator = () => {
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col col-12 col-md-6">
          <CalculatorView/>
        </div>
        <div className="col col-12 col-md-6">
          <CalculatorLog/>
        </div>
      </div>
    </div>
  );
};

export default Calculator;