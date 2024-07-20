import React, { useEffect, useState } from "react";

const RandomColor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  // Utility function to generate a random number up to 'length'
  const randomColorUtility = (length) => {
    return Math.floor(Math.random() * length);
  };

  // Function to generate a random HEX color
  const handleCreateRandomHexColor = () => {
    const hex = "0123456789ABCDEF";
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    setColor(hexColor);
  };

  // Function to generate a random RGB color
  const handleCreateRandomRgbColor = () => {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);
    setColor(`rgb(${r},${g},${b})`);
  };

  // Effect to generate initial color on mount and when 'typeOfColor' changes
  useEffect(() => {
    if (typeOfColor === "rgb") {
      handleCreateRandomRgbColor();
    } else {
      handleCreateRandomHexColor();
    }
  }, [typeOfColor]);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        fontFamily: "sans-serif",
      }}
    >
      {/* Main title */}
      <h1 style={{ color: "#fff", fontSize: "3rem" }}>
        Random Color Generator
      </h1>

      {/* Color type buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <button
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: typeOfColor === "hex" ? "#4CAF50" : "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setTypeOfColor("hex")}
        >
          Create HEX Color
        </button>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "1rem",
            fontWeight: "bold",
            color: "#fff",
            backgroundColor: typeOfColor === "rgb" ? "#4CAF50" : "#333",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setTypeOfColor("rgb")}
        >
          Create RGB Color
        </button>
      </div>

      {/* Generate color button */}
      <button
        style={{
          padding: "15px 30px",
          fontSize: "1.2rem",
          fontWeight: "bold",
          color: "#fff",
          backgroundColor: "#007BFF",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Generate Random Color
      </button>

      {/* Color display */}
      <div
        style={{
          color: "#fff",
          fontSize: "2rem",
          marginTop: "20px",
        }}
      >
        <h2>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h2>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;
