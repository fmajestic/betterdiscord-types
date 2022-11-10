export type NativeModule =
    | "discord_desktop_core"
    | "discord_erlpack"
    | "discord_spellcheck"
    | "discord_utils"
    | "discord_voice"
    | "discord_krisp"
    | "discord_game_utils"
    | "discord_rpc";

// From the requireModue source code
// export type NativeModule<T extends string> =
//     | (T extends `discord_${infer _}${infer _}` ? T : never)
//     | "erlpack";

export interface NativeModules {
    canBootstrapNewUpdater: boolean;

    ensureModule(name: string): unknown;

    requireModule(name: NativeModule): unknown;
}
