import { useReducer } from "react";
import "./styles.css";
import UserInfo from "./UserInfo";
import OpenAccount from "./OpenAccount";
import DepositButtons from "./DepositButtons";
import PayLoan from "./PayLoan";
import CloseAccount from "./CloseAccount";

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};
function reducer(state, action) {
  switch (action.type) {
    case "Open":
      return {
        ...state,
        balance: (state.balance = 500),
        isActive: !state.isActive,
      };
    case "DepositWithdraw":
      return { ...state, balance: state.balance + action.payload };
    case "Loan":
      if (state.loan === 0) {
        return {
          ...state,
          balance: state.balance + action.payload,
          loan: state.loan + action.payload,
        };
      } else {
        return state;
      }
    case "PayLoan":
      return {
        ...state,
        balance: (state.balance -= state.loan),
        loan: (state.loan = 0),
      };

    case "Close":
      if (state.balance === 0 && state.loan === 0) {
        return {
          ...state,
          balance: (state.balance = 0),
          isActive: !state.isActive,
        };
      } else {
        return state;
      }
    default:
      throw new Error("Unknown");
  }
}
export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <UserInfo balance={balance} loan={loan} />
      <OpenAccount dispatch={dispatch} isActive={isActive} />
      <DepositButtons dispatch={dispatch} isActive={isActive} />
      <PayLoan dispatch={dispatch} isActive={isActive} />
      <CloseAccount dispatch={dispatch} isActive={isActive} />
    </div>
  );
}
