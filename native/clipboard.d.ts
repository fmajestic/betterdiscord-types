export interface Clipboard {
    copy: (text?: string) => void;

    copyImage(imageArrayBuffer: Buffer, imageSrc: string): void;

    cut: () => void;

    paste: () => void;

    read: () => string;
}
