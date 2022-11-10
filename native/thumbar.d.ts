export interface ThumbarButtonProps {
    name: "VIDEO" | "MUTE" | "DEAFEN" | "DISCONNECT";

    active?: boolean;

    /** MacOS accessibility label */
    tooltip?: string;

    /** MacOS touchbar button flags */
    flags: ("disabled" | string)[];
}

export interface Thumbar {
    setThumbarButtons(
        buttons: ThumbarButtonProps[],
        isSystemDarkMode?: boolean,
    ): void;
}
