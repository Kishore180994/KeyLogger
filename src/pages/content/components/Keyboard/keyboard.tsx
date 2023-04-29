import React, { useEffect, useState } from "react";
import { StyledButton, StyledContainer } from "./keyboard.styles";
import Trackpad from "../Trackpad/trackpad";

const Keyboard = () => {
  const [keys, setKeys] = useState([]);
  const [modifiers, setModifiers] = useState({
    Shift: false,
    Control: false,
    Alt: false,
  });

  const getOutputKey = (key, modifiers) => {
    const { Shift, Control, Alt } = modifiers;
    return (
      (Shift && key !== "Shift" ? "Shift " : "") +
      (Control && key !== "Control" ? "Ctrl " : "") +
      (Alt && key !== "Alt" ? "Alt " : "") +
      key
    );
  };

  const handleKeyDown = (event) => {
    let key = event.key;
    if (key === " ") {
      key = "Space";
    }

    if (["Shift", "Control", "Alt"].includes(key)) {
      setModifiers((prevModifiers) => ({ ...prevModifiers, [key]: true }));
    }

    const output = getOutputKey(key, modifiers);

    setKeys((prevKeys) => {
      if (!prevKeys.includes(output)) {
        return [...prevKeys, output];
      }
      return prevKeys;
    });
  };

  const handleKeyUp = (event) => {
    let key = event.key;
    if (key === " ") {
      key = "Space";
    }

    if (["Shift", "Control", "Alt"].includes(key)) {
      setModifiers((prevModifiers) => {
        const updatedModifiers = { ...prevModifiers, [key]: false };

        const newKeys = keys
          .map((k) =>
            getOutputKey(
              k.replace(/(Shift |Ctrl |Alt )+/g, ""),
              updatedModifiers
            )
          )
          .filter((k) => k !== key);
        setKeys(newKeys);

        return updatedModifiers;
      });
    } else {
      const output = getOutputKey(key, modifiers);
      setKeys((prevKeys) => prevKeys.filter((k) => k !== output));
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("keyup", handleKeyUp);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("keyup", handleKeyUp);
    };
  }, [modifiers]);
  return (
    <StyledContainer>
      {keys.map((key, i) => (
        <StyledButton key={i} style={{ opacity: 1, top: 0 }}>
          {key}
        </StyledButton>
      ))}
      <Trackpad />
    </StyledContainer>
  );
};

export default Keyboard;
