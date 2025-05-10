import { useEffect } from 'react';

const RealEyeIntegration = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.text = `
      import EmbeddedPageSdk from "https://app.realeye.io/sdk/js/testRunnerEmbeddableSdk-1.7.1.js";
      window.addEventListener("DOMContentLoaded", () => {
        const debugMode = false;
        const stimulusId = null;
        const forceRun = false;
        window.reSdk = new EmbeddedPageSdk(debugMode, stimulusId, forceRun);
      });
    `;
    document.body.appendChild(script);
  }, []);

  return null;
};

export default RealEyeIntegration;
