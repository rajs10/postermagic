import React, { useEffect, useRef } from "react";

function PatternGenerator({ imagePath }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Load the image
    const image = new Image();
    image.src = imagePath;

    // Wait for the image to load
    image.onload = function () {
      // Set canvas size to match the image
      canvas.width = image.width;
      canvas.height = image.height;

      // Draw the image onto the canvas
      ctx.drawImage(image, 0, 0, image.width, image.height);

      // Get the pixel data from the canvas
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const pixelData = imageData.data;

      // Convert the pixel data into a binary pattern
      const markerSize = Math.min(canvas.width, canvas.height);
      const markerCells = [];

      for (let y = 0; y < markerSize; y++) {
        for (let x = 0; x < markerSize; x++) {
          const pixelIndex = (y * canvas.width + x) * 4;
          const red = pixelData[pixelIndex];
          const green = pixelData[pixelIndex + 1];
          const blue = pixelData[pixelIndex + 2];
          const luminance = (red + green + blue) / 3;
          const cellState = luminance < 128 ? 1 : 0; // Threshold for black/white

          markerCells.push(cellState);
        }
      }

      // Generate the marker pattern
      const markerPattern = generateMarkerPattern(markerSize, markerCells);

      // Use the generated marker pattern as needed
      console.log(markerPattern);
      saveMarkerPattern(markerPattern);
    };
  }, [imagePath]);

  function generateMarkerPattern(size, cells) {
    const pattern = [];

    // Generate the binary pattern
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        const cellState = cells[row * size + col] ? "1" : "0";
        pattern.push(cellState);
      }
    }

    // Combine pattern with marker ID (ID 0 in this example)
    const markerID = "0";
    const patternString = pattern.join("");
    const markerPattern = markerID + "\n" + patternString;

    return markerPattern;
  }

  function saveMarkerPattern(markerPattern) {
    const fileName = 'marker.patt';
    const fileContent = markerPattern;

    const blob = new Blob([fileContent], { type: 'text/plain' });

    // Create a temporary link element
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = fileName;

    // Programmatically click the link to trigger the download
    link.click();

    // Clean up
    URL.revokeObjectURL(link.href);
  }

  return <canvas ref={canvasRef} />;
}

export default PatternGenerator;
