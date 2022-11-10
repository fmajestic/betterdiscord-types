export interface DesktopCapturer {
    getDesktopCaptureSources(options: {
        types: ("screen" | "window")[];
        thumbnailSize?: {
            width: number;
            height: number;
        };
        fetchWindowIcons?: boolean;
    }): {
        id: string;
        name: string;
        url: string;
    };
}
