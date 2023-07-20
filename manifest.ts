import packageJson from "./package.json";

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: "GamePadX By MoovyChat",
  version: packageJson.version,
  description: packageJson.description,
  permissions: ["scripting", "activeTab"],
  background: {
    service_worker: "src/pages/background/index.js",
    type: "module",
  },
  action: {
    default_icon: "GamePadX-34.png",
  },
  icons: {
    "128": "GamePadX-128.png",
  },
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
        "GamePadX-128.png",
        "GamePadX-34.png",
      ],
      matches: ["*://*/*"],
    },
  ],
};

export default manifest;
