function DepositButtons({ isActive, dispatch }) {
  return (
    <div>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "DepositWithdraw", payload: 150 });
          }}
          disabled={!isActive}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "DepositWithdraw", payload: -50 });
          }}
          disabled={!isActive}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "Loan", payload: 5000 });
          }}
          disabled={!isActive}
        >
          Request a loan of 5000
        </button>
      </p>
    </div>
  );
}

export default DepositButtons;
