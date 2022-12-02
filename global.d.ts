import { Channel } from "./native";

export default interface GlobalEnv {
    ACTIVITY_APPLICATION_HOST: string;
    ALGOLIA_KEY: string;
    API_ENDPOINT: string;
    API_VERSION: number;
    ASSET_ENDPOINT: string;
    BRAINTREE_KEY: `${Channel}_${string}`;
    CDN_HOST: string;
    GATEWAY_ENDPOINT: string;
    GIFT_CODE_HOST: string;
    GUILD_TEMPLATE_HOST: string;
    HTML_TIMESTAMP: number;
    INVITE_HOST: string;
    MARKETING_ENDPOINT: string;
    MEDIA_PROXY_ENDPOINT: string;
    MIGRATION_SOURCE_ORIGIN: string;
    MIGRATION_DESTINATION_ORIGIN: string;
    NETWORKING_ENDPOINT: string;
    PROJECT_ENV: "production" | string;
    RELEASE_CHANNEL: Channel;
    REMOTE_AUTH_ENDPOINT: string;
    RTC_LATENCY_ENDPOINT: string;
    SENTRY_TAGS: {
        buildId: string;
        buildType: "normal" | string;
    };
    STRIPE_KEY: string;
    WEBAPP_ENDPOINT: string;
    WIDGET_ENDPOINT: string;
}
