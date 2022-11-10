import { Channel } from "./common";

export interface CrashReporterMetadata {
    channel: Channel;

    sentry: {
        environment: Channel;

        /** Version */
        release: string;

        user: {
            id: string;
            username: string;
            email: string;
        };
    };

    /** Linux only */
    wm?: string;

    /** Linux only */
    distro? : string;

    /** Snowflake ID */
    user_id: string;

    username: string;

    email: string;
}

export interface CrashReporter {
    getMetadata(): CrashReporterMetadata;

    updateCrashReporter(additional_metadata: any): Promise<void>;
}
