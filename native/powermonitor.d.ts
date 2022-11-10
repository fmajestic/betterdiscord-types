type PowerMonitorEvent = "resume" | "suspend" | "lock-screen" | "unlock-screen";

export interface PowerMonitor {
    on(ev: PowerMonitorEvent, listener: () => void): void;

    getSystemIdleTimeMs(): number;

    removeAllListeners(): void;

    removeListener(listener: () => void): void;
}
