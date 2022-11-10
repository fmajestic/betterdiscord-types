export interface SafeStorage {
    decryptString(encrypted: string): string;

    encryptString(plainText: string): string;

    isEncryptionAvailable(): boolean;
}
