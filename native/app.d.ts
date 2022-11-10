import { Channel } from "./common";
import { NativeModule } from "./nativemodules";

export type AllowedPath =
    | "home"
    | "appData"
    | "desktop"
    | "documents"
    | "downloads"
    | "crashDumps";

export type App = {
    dock: {
        bounce(type?: "critical" | "informational"): number | -1;

        cancelBounce(id: number): void;

        setBadge(text: string): void;
    };

    getDefaultDoubleClickAction(): Promise<string>;

    getModuleVersions(): Record<NativeModule, number>;

    getPath(path: AllowedPath): string;

    getReleaseChannel(): Channel;

    getVersion(): string;

    registerUserInteractionHandler(
        elementId: string,
        eventType: any,
        callback: (event: Event) => void,
    ): () => void;

    relaunch(): void;

    setBadgeCount(count: number): Promise<void>;
};
