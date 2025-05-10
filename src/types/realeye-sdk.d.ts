// src/types/realeye-sdk.d.ts
declare module "https://app.realeye.io/sdk/js/testRunnerEmbeddableSdk-1.7.1.js" {
  export interface EmbeddedPageSdkInstance {
    startNextExposure: () => void;
    finishEyeTrackingTest: () => void;
    enableVirtualChin: (enable: boolean) => void;
    setStimulusId: (stimulusId: string | null) => void;
    getStimulusId: () => string;
  }

  export default class EmbeddedPageSdk {
    constructor(
      debugMode?: boolean,
      stimulusId?: string | null,
      forceRun?: boolean
    );
    [key: string]: any; // Optional: for flexibility
  }

  export interface EmbeddedPageSdk extends EmbeddedPageSdkInstance {}
}
