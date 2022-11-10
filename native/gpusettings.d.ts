export interface GpuSettings {
    getEnableHardwareAcceleration(): boolean;

    /** Calling this reloads the app, lol */
    setEnableHardwareAcceleration(enable: boolean): void;
}
