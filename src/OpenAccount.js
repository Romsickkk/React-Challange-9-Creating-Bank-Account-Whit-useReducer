function OpenAccount({ isActive, dispatch }) {
  return (
    <div>
      <button
        onClick={() => {
          dispatch({ type: "Open" });
        }}
        disabled={isActive}
      >
        Open account
      </button>
    </div>
  );
}

export default OpenAccount;
