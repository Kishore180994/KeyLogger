import { createRoot } from "react-dom/client";
import App from "@src/pages/content/components/Main/app";

const root = document.createElement("div");
root.id = "gamepadX-by-moovychat";
document.body.append(root);

createRoot(root).render(<App />);

function handleFullscreenChange() {
  const isFullscreen = document.fullscreenElement !== null;

  if (isFullscreen) {
    // When entering fullscreen, append the extension root element to the fullscreen container
    document.fullscreenElement.append(root);

    // Make sure the root element is visible and positioned correctly
    root.style.display = "block";
    root.style.position = "absolute";
    root.style.zIndex = "10000"; // Choose a high value to ensure it's on top of the video
  } else {
    // When exiting fullscreen, move the root element back to the body
    document.body.append(root);
  }
}

document.addEventListener("fullscreenchange", handleFullscreenChange);
