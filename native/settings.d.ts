export type RendererSetWhitelist =
    | "audioSubsystem"
    | "useLegacyAudioDevice"
    | "debugLogging";

export interface Settings {
    get<T = any>(key: string): Promise<T | false>;

    get<T>(key: string, defaultValue: T): Promise<T>;

    getSync<T = any>(key: string): T;

    set(key: RendererSetWhitelist, value: any): Promise<void>;
}
