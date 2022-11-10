export interface Http {
    getAPIEndpoint(): Promise<string>;

    makeChunkedRequest(
        route: string,
        chunks: any[],
        options: {
            method: string;
            contentType: string;
            chunkInterval: number;
            token: string;
        },
        callback: (
            error: Error,
            result: {
                /** The HTTP status code */
                status: number;
                /** Response body */
                body: any;
            },
        ) => void,
    ): void;
}
