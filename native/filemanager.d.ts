export interface FileManagerDialogOptions {
    filters?: {
        name: string;
        extensions: string[];
    }[];
    properties: (
        | "openFile"
        | "openDirectory"
        | "multiSelections"
        | "showHiddenFiles"
        | "createDirectory"
        | "promptToCreate"
        | "noResolveAliases"
        | "treatPackageAsDirectory"
        | "dontAddToRecent"
    )[];
}

export interface File {
    filename: string;
    data: Uint8Array;
}

export interface FileManager {
    basename(path: string): string;

    cleanupTempFiles(): Promise<void>;

    dirname(path: string): string;

    extname(path: string): string;

    getCrashFiles(): Promise<string[]>;

    getModuleDataPathSync(): string;

    getModulePath(): Promise<string>;

    join(...paths: string[]): string;

    openFiles(
        dialogOptions: FileManagerDialogOptions,
        maxSize: number,
    ): Promise<File[]>;

    readLogFiles(maxSize: number): Promise<File[]>;

    readTimeSeriesLogFiles(
        maxSize: number,
        blindChannelId: string,
    ): Promise<File[]>;

    saveWithDialog(
        fileContent: string | Buffer | NodeJS.TypedArray | DataView,
        fileName: string,
    ): Promise<void>;

    showItemInFolder(path: string): Promise<void>;

    showOpenDialog(options: FileManagerDialogOptions): Promise<string[]>;
}
