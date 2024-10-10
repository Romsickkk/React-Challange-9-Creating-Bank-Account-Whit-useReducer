function PayLoan({ isActive, dispatch }) {
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "PayLoan" });
        }}
        disabled={!isActive}
      >
        Pay loan
      </button>
    </div>
  );
}

export default PayLoan;
