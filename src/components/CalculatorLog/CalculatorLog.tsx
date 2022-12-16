import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../App/Store";
import {calculatorActions} from "../../containers/calculatorSlice";

const CalculatorLog = () => {
  const dispatch = useDispatch<AppDispatch>();
  const log = useSelector((state: RootState) => state.calculator.log);

  return (
    <div className="card shadow"
         style={{
           maxWidth: '30em',
           margin: '0 auto'
         }}
    >
      <div className="card-header d-flex justify-content-between align-items-center">
        <strong>Log</strong>
        <button
          className="btn btn-link btn-sm"
          onClick={() => dispatch(calculatorActions.cleanLog())}
        >Clear
        </button>
      </div>
      <div className="card-body">
        {log.map((entry, i) => (
          <div key={i} className="mb-3 border-bottom">
            <span className="me-3 text-secondary">{i + 1}.</span>
            <span>{entry.expression}</span>
            <span> = </span>
            <strong
              className={entry.result === 'error' ? 'text-danger' : ''}
            >{entry.result}</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalculatorLog;