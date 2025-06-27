import React, { useState } from "react";

const GRID_SIZE = 100;

export default function FootballPixelBattle() {
  const [grid, setGrid] = useState(
    Array(GRID_SIZE * GRID_SIZE).fill("#ffffff")
  );

  const handleClick = (index) => {
    const newGrid = [...grid];
    newGrid[index] = newGrid[index] === "#ffffff" ? "#0000ff" : "#ffffff";
    setGrid(newGrid);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-center mb-4">
        Football Pixel Battle ⚽
      </h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)`,
          gap: "1px",
        }}
      >
        {grid.map((color, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            style={{
              backgroundColor: color,
              width: "5px",
              height: "5px",
              border: "1px solid #ddd",
              cursor: "pointer",
            }}
          ></div>
        ))}
      </div>
      <p className="text-center mt-4 text-sm text-gray-600">
        Clicca sui pixel per colorarli di blu (test). In futuro potrai scegliere
        la tua squadra e dominare il campo!
      </p>
    </div>
  );
}
