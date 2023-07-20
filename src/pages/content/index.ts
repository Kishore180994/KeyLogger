console.log("content loaded");

/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
import("./components/Main");

// Add an ID for the injected element (replace with your actual element)
const injectedElementId = "gamepadX-by-moovychat";

chrome.runtime.onMessage.addListener((request) => {
  if (request.action === "toggleContentScript") {
    // Toggle the display of the element
    const element = document.getElementById(injectedElementId);
    element.style.display = element.style.display === "none" ? "block" : "none";
  }
});
