import React, { useState, useEffect, useRef } from "react";
import { StyledTrackPad } from "./trackpad.styles";

export default function Trackpad() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const trackpadRef = useRef(null);

  const handleMouseMove = (event) => {
    const box = trackpadRef.current.getBoundingClientRect();
    const scaleX = box.width / window.innerWidth;
    const scaleY = box.height / window.innerHeight;

    const clampedX = Math.min(Math.max(event.clientX * scaleX, 0), box.width);
    const clampedY = Math.min(Math.max(event.clientY * scaleY, 0), box.height);

    setCursorPosition({
      x: clampedX,
      y: clampedY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <StyledTrackPad ref={trackpadRef} className="trackpad">
      <div
        className="cursor-circle"
        style={{
          left: `${cursorPosition.x}px`,
          top: `${cursorPosition.y}px`,
        }}
      ></div>
    </StyledTrackPad>
  );
}
