// src/components/RealEyeSdk.tsx
import { useEffect, useState } from "react";

declare global {
  interface Window {
    reSdk?: {
      startNextExposure: () => void;
      finishEyeTrackingTest: () => void;
      enableVirtualChin: (enable: boolean) => void;
      setStimulusId: (stimulusId: string | null) => void;
      getStimulusId: () => string;
    };
  }
}

const RealEyeSdk: React.FC = () => {
  const [sdkInitialized, setSdkInitialized] = useState(false);

  useEffect(() => {
    console.log("Loading RealEye SDK...");
    import(
      /* webpackIgnore: true */ "https://app.realeye.io/sdk/js/testRunnerEmbeddableSdk-1.7.1.js"
    )
      .then(({ default: EmbeddedPageSdk }) => {
        console.log("RealEye SDK module loaded.");
        if (EmbeddedPageSdk) {
          const debugMode = false;
          const stimulusId = "a9bac075 - f024 - 4166 - bf84 - b30c3e12e04b";
          const forceRun = false;

          try {
            window.reSdk = new EmbeddedPageSdk(debugMode, stimulusId, forceRun);
            console.log("RealEye EmbeddedPageSdk initialized:", window.reSdk);
            setSdkInitialized(true);
          } catch (error) {
            console.error("Failed to initialize RealEye SDK:", error);
          }
        } else {
          console.error("EmbeddedPageSdk not found in module exports.");
        }
      })
      .catch((error) => {
        console.error("Failed to load RealEye SDK module:", error);
      });
  }, []);

  return null;
};

export default RealEyeSdk;
