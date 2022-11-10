export interface UserDataCache {
    cacheUserData(data: string | Buffer): void;

    deleteCache(): void;

    getCached(): any | null;
}
