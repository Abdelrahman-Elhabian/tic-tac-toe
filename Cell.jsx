const Cell = ({ go, setGo, id, setCells, cells, cell, winningMessage}) => {
  const handleClick = (e) => {
    if (winningMessage) {
      return 0;
    }
    if (!cell) {
      if (go === "circle") {
        handleCellChange("circle");
        setGo("cross");
      } else if (go === "cross") {
        handleCellChange("cross");
        setGo("circle");
      }
    }
  };

  const handleCellChange = (cellToChange) => {
    let copyCells = [...cells];
    copyCells[id] = cellToChange;
    setCells(copyCells);
  };

  
  return (
    <div className={`square${cell ? " taken" : ""}`} onClick={handleClick}>
      <div className={cell}>{cell ? (cell === "circle" ? "O" : "X") : ""}</div>
    </div>
  );
};

export default Cell;
