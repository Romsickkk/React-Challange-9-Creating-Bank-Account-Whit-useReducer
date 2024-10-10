function CloseAccount({ isActive, dispatch }) {
  return (
    <div>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "Close" });
          }}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}

export default CloseAccount;
