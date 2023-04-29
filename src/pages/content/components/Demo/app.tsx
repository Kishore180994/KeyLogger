import { useEffect, useState } from "react";
import Keyboard from "../Keyboard/keyboard";
import Controller from "../Controller/controller";

export default function App() {
  const [isControllerConnected, setIsControllerConnected] = useState(false);
  const [controllerType, setControllerType] = useState("");

  useEffect(() => {
    const handleGamepadConnected = (event) => {
      setIsControllerConnected(true);
      setControllerType(event.gamepad.id);
    };

    const handleGamepadDisconnected = () => {
      setIsControllerConnected(false);
      setControllerType("");
    };

    window.addEventListener("gamepadconnected", handleGamepadConnected);
    window.addEventListener("gamepaddisconnected", handleGamepadDisconnected);

    return () => {
      window.removeEventListener("gamepadconnected", handleGamepadConnected);
      window.removeEventListener(
        "gamepaddisconnected",
        handleGamepadDisconnected
      );
    };
  }, []);

  return (
    <div>
      {!isControllerConnected ? (
        <Keyboard />
      ) : (
        <Controller controllerType={controllerType} />
      )}
    </div>
  );
}
