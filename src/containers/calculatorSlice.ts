import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface logResult {
  expression: string;
  result: string;
}

interface CalculatorState {
  display: string;
  log: logResult[];
}

const initialState: CalculatorState = {
  display: '',
  log: [],
}

export const calculatorSlice = createSlice({
  name: 'calculator',
  initialState,
  reducers: {
    cleanLog: (state) => {
      state.log = [];
    },
    inputNumber: (state, action: PayloadAction<number>) => {
      state.display += action.payload;
    },
    add: (state) => {
      state.display += ' + ';
    },
    subtract: (state) => {
      state.display += ' - ';
    },
    multiply: (state) => {
      state.display += ' * ';
    },
    divide: (state) => {
      state.display += ' / ';
    },
    addPeriod: (state) => {
      state.display += '.';
    },
    calculate: (state) => {
      if (state.display === '') return;
      let result = ''

      try {
        result = eval(state.display).toString();
        state.log.push({
          expression: state.display,
          result,
        });
      } catch {
        state.log.push({
          expression: state.display,
          result: 'error',
        });
      } finally {
        state.display = result;
      }
    },
    redo: (state) => {
      if (state.display.length !== 0) {
        let rm = 1;

        if (state.display.length > 1 && state.display[state.display.length - 2] === ' ') rm = 2;
        else if (state.display[state.display.length - 1] === ' ') rm = 3;

        state.display = state.display.slice(0, -rm);
      }
    },
    reset: (state) => {
      state.display = '';
    },
  }
});

export const calculatorReducer = calculatorSlice.reducer;
export const calculatorActions = calculatorSlice.actions;