import React from 'react';
import {calculatorActions} from "../../containers/calculatorSlice";
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "../../App/Store";

const CalculatorView = () => {
  const dispatch = useDispatch<AppDispatch>();
  const calculatorDisplay = useSelector((state: RootState) => state.calculator.display);

  return (
    <div className="card shadow"
         style={{
           maxWidth: '30em',
           margin: '0 auto'
         }}
    >
      <div className="card-body">
        <div
          className="border rounded-3 shadow-sm mb-2 px-2 fs-3 d-flex"
          style={{minHeight: '3em', lineHeight: '3em'}}
        >{calculatorDisplay}</div>
        <div className="container-fluid">
          <div className="row">
            <div className="col col-10">
              <div className="row">
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.inputNumber(7))}
                    className="col-3 w-100 btn btn-primary"
                  >7
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.inputNumber(8))}
                    className="col-3 w-100 btn btn-primary"
                  >8
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.inputNumber(9))}
                    className="col-3 w-100 btn btn-primary"
                  >9
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.divide())}
                    className="col-3 w-100 btn btn-primary"
                  >/
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.inputNumber(4))}
                    className="col-3 w-100 btn btn-primary"
                  >4
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.inputNumber(5))}
                    className="col-3 w-100 btn btn-primary"
                  >5
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.inputNumber(6))}
                    className="col-3 w-100 btn btn-primary"
                  >6
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.multiply())}
                    className="col-3 w-100 btn btn-primary"
                  >*
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.inputNumber(1))}
                    className="col-3 w-100 btn btn-primary"
                  >1
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.inputNumber(2))}
                    className="col-3 w-100 btn btn-primary"
                  >2
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.inputNumber(3))}
                    className="col-3 w-100 btn btn-primary"
                  >3
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.subtract())}
                    className="col-3 w-100 btn btn-primary"
                  >-
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.redo())}
                    className="col-3 w-100 btn btn-primary"
                  >&#60;</button>
                </div>
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.inputNumber(0))}
                    className="col-3 w-100 btn btn-primary"
                  >0
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.addPeriod())}
                    className="col-3 w-100 btn btn-primary"
                  >.
                  </button>
                </div>
                <div className="col-3 p-1">
                  <button
                    onClick={() => dispatch(calculatorActions.add())}
                    className="col-3 w-100 btn btn-primary"
                  >+
                  </button>
                </div>
              </div>
            </div>
            <div className="col col-2">
              <div className="row d-flex flex-column h-100">
                <div className="p-1 h-50">
                  <button
                    onClick={() => dispatch(calculatorActions.reset())}
                    className="w-100 btn btn-primary h-100"
                  >C
                  </button>
                </div>
                <div className="p-1 h-50">
                  <button
                    onClick={() => dispatch(calculatorActions.calculate())}
                    className="w-100 btn btn-primary h-100"
                  >=
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorView;