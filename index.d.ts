import { LoDashStatic } from "lodash";

import { BdApi } from "./bdapi";
import GlobalEnv from "./global";
import DiscordNative from "./native";

export * from "./addonapi";
export * from "./bdapi";
export * from "./contextmenu";
export * from "./data";
export * from "./dom";
export * from "./patcher";
export * from "./plugin";
export * from "./reactutils";
export * from "./ui";
export * from "./utils";
export * from "./webpack";
export * from "./legacy";
export * from "./native";
export * from "./global";

export type Cancel = () => void;

declare global {
    /** BetterDiscord's global plugin API. */
    const BdApi: BdApi;

    const _: LoDashStatic;

    const DiscordNative: DiscordNative;

    const GLOBAL_ENV: GlobalEnv;

    interface Window {
        /** BetterDiscord's global plugin API. */
        BdApi: BdApi;

        _: LoDashStatic;

        DiscordNative: DiscordNative;

        GLOBAL_ENV: GlobalEnv;
    }
}
