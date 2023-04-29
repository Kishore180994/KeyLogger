import { useMemo } from "react";

export const useControllerInfo = (controllerType: string) => {
  const info = useMemo(() => {
    const controllerInfo = {
      name: "",
      keyMapping: {},
      buttonMapping: {},
    };
    console.log(controllerType);

    if (controllerType.includes("Xbox")) {
      controllerInfo.name = "Xbox Controller";
      controllerInfo.buttonMapping = {
        0: "A",
        1: "B",
        2: "X",
        3: "Y",
        4: "LB",
        5: "RB",
        6: "LT",
        7: "RT",
        8: "Back",
        9: "Start",
        10: "L3",
        11: "R3",
        12: "D-Pad Up",
        13: "D-Pad Down",
        14: "D-Pad Left",
        15: "D-Pad Right",
      };
    } else if (controllerType.includes("Luna")) {
      controllerInfo.name = "Luna Gamepad";
      controllerInfo.buttonMapping = {
        0: "A",
        1: "B",
        2: "Alexa Push to Talk",
        3: "X",
        4: "Y",
        5: "Luna",
        6: "LB",
        7: "RB",
        8: "Action",
        9: "",
        10: "",
        11: "Menu",
        12: "",
        13: "L3",
        14: "R3",
        15: "",
      };
    } else if (controllerType.includes("DUALSHOCK")) {
      controllerInfo.name = "Play station 4";
      controllerInfo.buttonMapping = {
        0: "A",
        1: "B",
        2: "X",
        3: "Y",
        4: "LB",
        5: "RB",
        6: "LT",
        7: "RT",
        8: "Share",
        9: "Options",
        10: "L3",
        11: "R3",
        12: "D-Pad Up",
        13: "D-Pad Down",
        14: "D-Pad Left",
        15: "D-Pad Right",
        16: "PS Button",
        17: "Touch Pad",
      };
    }

    return controllerInfo;
  }, [controllerType]);

  return info;
};
