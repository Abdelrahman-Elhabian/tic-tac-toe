"use client";
import { useState, useEffect } from "react";
import "./globals.css";
import Cell from "./components/Cell";

export default function Home() {
  const [cells, setCells] = useState(["", "", "", "", "", "", "", "", ""]);
  const [go, setGo] = useState("circle");
  const [winningMessage, setwinningMessage] = useState("");

  let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  useEffect(() => {
    winningCombos.forEach((combo) => {
      const circleWins = combo.every((cell) => cells[cell] === "circle");
      const crossWins = combo.every((cell) => cells[cell] === "cross");
      if (circleWins) {
        setwinningMessage("Circle wins!");
      } else if (crossWins) {
        setwinningMessage("Cross wins");
      }
    });
  }, [cells, winningMessage]);
  useEffect(() => {
    if (cells.every((cell) => cell !== "") && !winningMessage) {
      setwinningMessage("Draw!");
    }
  }, [cells, winningMessage]);
  return (
    <main>
      <div className="gameboard">
        {cells.map((cell, index) => (
          <Cell
            id={index}
            go={go}
            setGo={setGo}
            key={index}
            cells={cells}
            setCells={setCells}
            cell={cell}
            winningMessage={winningMessage}
          />
        ))}
      </div>
      <center>
        <br />
        <div>{winningMessage}</div>
        <div className="turn">{!winningMessage && `It's now ${go} turn!`}</div>
      </center>
    </main>
  );
}
