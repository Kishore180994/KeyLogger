// hooks/useRandomColor.ts
import { useState, useEffect } from "react";

const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

export const useRandomColor = (interval: number): string => {
  const [color, setColor] = useState<string>(generateRandomColor());

  useEffect(() => {
    const timer = setInterval(() => {
      setColor(generateRandomColor());
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return color;
};
