import Draggable, { DraggableData, DraggableEvent } from "react-draggable";
import React, { useState, useRef } from "react";
import "./piece.css";

export const Bubble = () => {
  const [currentRotate, setCurrentRotate] = useState(0);

  const isDraggingRef = useRef(false);

  const onDrag = () => {
    isDraggingRef.current = true;
  };

  const onStop = () => {
    if (!isDraggingRef.current) {
      setCurrentRotate(currentRotate + 90);
    }
    isDraggingRef.current = false;
  };

  return (
    <Draggable onStop={onStop} onDrag={onDrag}>
      <div>
        <div
          className="Piece"
          style={{ transform: "rotate(" + currentRotate + "deg)" }}
        >
          <span className="Piece-phrase"></span>
        </div>
      </div>
    </Draggable>
  );
};
