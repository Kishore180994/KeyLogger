import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

reloadOnUpdate("pages/background");

/**
 * Extension reloading is necessary because the browser automatically caches the css.
 * If you do not use the css of the content script, please delete it.
 */
reloadOnUpdate("pages/content/style.scss");

// chrome.action.onClicked.addListener((tab) => {
//   chrome.scripting.executeScript({
//     target: { tabId: tab.id },
//     files: ["src/pages/content/index.js"],
//   });
// });

const tabStates = {};

chrome.action.onClicked.addListener((tab) => {
  const tabId = tab.id;

  if (!tabStates[tabId]) {
    chrome.scripting.executeScript(
      {
        target: { tabId: tab.id },
        files: ["src/pages/content/index.js"],
      },
      () => {
        tabStates[tabId] = { scriptInserted: true, visible: true };
        // Set badge text to "On"
        chrome.action.setBadgeText({ text: "On", tabId: tabId });
      }
    );
  } else {
    chrome.tabs.sendMessage(tabId, { action: "toggleContentScript" });
    // Toggle badge text between "On" and "Off"
    tabStates[tabId].visible = !tabStates[tabId].visible;
    chrome.action.setBadgeText({
      text: tabStates[tabId].visible ? "On" : "Off",
      tabId: tabId,
    });
  }
});

// Set the initial badge text to "Off"
chrome.tabs.query({}, (tabs) => {
  tabs.forEach((tab) => {
    chrome.action.setBadgeText({ text: "Off", tabId: tab.id });
  });
});
