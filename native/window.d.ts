export interface Window {
    USE_OSX_NATIVE_TRAFFIC_LIGHTS: boolean;

    blur(key?: string): Promise<void>;

    close(key?: string): Promise<void>;

    flashFrame(flag: boolean): Promise<void>;

    focus(_hack: any, key?: string): Promise<void>;

    fullscreen(key?: string): Promise<void>;

    isAlwaysOnTop(key?: string): Promise<boolean>;

    maximize(key?: string): Promise<void>;

    minimize(key?: string): Promise<void>;

    restore(key?: string): Promise<void>;

    setAlwaysOnTop(key: string | undefined, enabled: boolean): Promise<void>;

    setBackgroundThrottling(enabled: boolean): Promise<void>;

    setDevtoolsCallbacks(opened: () => void, closed: () => void): Promise<void>;

    /**
     * `< 0`: remove
     *
     * `[0, 1.0]`: percentage
     *
     * `> 1`: indeterminate
     */
    setProgressBar(progress: number, key?: string): Promise<void>;

    /** @param factor Percentage, `100.0` is normal zoom */
    setZoomFactor(factor: number): Promise<void>;
}
