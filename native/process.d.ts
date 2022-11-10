export interface Process {
    arch: NodeJS.Architecture;

    env: {
        DISCORD_GATEWAY_PLAINTEXT?: string;
        DISCORD_DISALLOW_POPUPS?: string;
        DISCORD_TEST?: string;
        LOCALAPPDATA?: string;
        PROGRAMDATA?: string;
        PROGRAMFILES?: string;
        "PROGRAMFILES(X86)"?: string;
        PROGRAMW6432?: string;
    };

    platform: NodeJS.Platform;
}
