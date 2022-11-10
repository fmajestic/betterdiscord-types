export interface Features {
    declareSupported(feature: any): void;
    supports(feature: any): boolean;
}
