export interface powerSaveBlocker {
    blockDisplaySleep(): Promise<number>;

    cleanupDisplaySleep(): Promise<void>;

    unblockDisplaySleep(id: number): Promise<void>;
}
