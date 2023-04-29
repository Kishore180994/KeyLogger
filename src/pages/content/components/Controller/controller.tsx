// Controller.tsx
import React, { useEffect, useMemo, useState } from "react";
import { StyledController } from "./controller.styles";
import XboxIcon from "../../svgComponents/xboxIcon/xbox";
import { useRandomColor } from "../../hooks/useRandomColor";
import { useControllerInfo } from "../../hooks/useControllerInfo";
import PS4Icon from "../../svgComponents/ps4Icon/ps4";

interface Props {
  controllerType: string;
}

const Controller: React.FC<Props> = ({ controllerType }) => {
  const strokeColor = useRandomColor(1000); // Change color every 500ms
  const [pressedButtons, setPressedButtons] = useState<string[]>([]);
  const [axes, setAxes] = useState<number[]>([0, 0]);

  const controllerInfo = useControllerInfo(controllerType);

  useEffect(() => {
    const gamepadUpdateInterval = setInterval(() => {
      const gamepads = navigator.getGamepads();
      for (const gamepad of gamepads) {
        if (gamepad && gamepad.connected) {
          const newPressedButtons: string[] = [];
          gamepad.buttons.forEach((button, index) => {
            if (button.pressed) {
              console.log(gamepad);
              newPressedButtons.push(controllerInfo.buttonMapping[index]);
            }
          });
          setPressedButtons(() => newPressedButtons);
          const newAxes: number[] = [];
          gamepad.axes.forEach((axis, index) => {
            newAxes.push(Math.round(axis * 100) / 100);
          });
          setAxes(() => newAxes);
        }
      }
    }, 100);

    return () => {
      clearInterval(gamepadUpdateInterval);
    };
  }, [controllerInfo]);

  const leftAxisX = useMemo(() => Math.round(394.4 + axes[0] * 33.3), [axes]);
  const leftAxisY = useMemo(() => Math.round(223.6 - axes[1] * 33.3), [axes]);
  const rightAxisX = useMemo(() => Math.round(498.1 + axes[2] * 33.3), [axes]);
  const rightAxisY = useMemo(() => Math.round(223.6 - axes[3] * 33.3), [axes]);

  return (
    <StyledController strokeColor={strokeColor}>
      <div className="controller-container">
        <div className="stroked-text">
          {pressedButtons.map((button, index) => (
            <div key={index}>{button}</div>
          ))}
        </div>
        {controllerInfo.name === "Play station 4" ? (
          <PS4Icon
            className="controller"
            pressedButtons={pressedButtons}
            leftAxisX={leftAxisX}
            leftAxisY={leftAxisY}
            rightAxisX={rightAxisX}
            rightAxisY={rightAxisY}
          />
        ) : (
          <XboxIcon
            className="controller"
            pressedButtons={pressedButtons}
            leftAxisX={leftAxisX}
            leftAxisY={leftAxisY}
            rightAxisX={rightAxisX}
            rightAxisY={rightAxisY}
          />
        )}
      </div>
      <div className="name">
        <div>{controllerInfo.name}</div>
      </div>
    </StyledController>
  );
};

export default Controller;
