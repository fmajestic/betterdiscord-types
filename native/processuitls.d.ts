type MinidumpExceptionType =
    | "EXCEPTION_ACCESS_VIOLATION"
    | "EXCEPTION_DATATYPE_MISALIGNMENT"
    | "EXCEPTION_BREAKPOINT"
    | "EXCEPTION_SINGLE_STEP"
    | "EXCEPTION_ARRAY_BOUNDS_EXCEEDED"
    | "EXCEPTION_FLT_DENORMAL_OPERAND"
    | "EXCEPTION_FLT_DIVIDE_BY_ZERO"
    | "EXCEPTION_FLT_INEXACT_RESULT"
    | "EXCEPTION_FLT_INVALID_OPERATION"
    | "EXCEPTION_FLT_OVERFLOW"
    | "EXCEPTION_FLT_STACK_CHECK"
    | "EXCEPTION_FLT_UNDERFLOW"
    | "EXCEPTION_INT_DIVIDE_BY_ZERO"
    | "EXCEPTION_INT_OVERFLOW"
    | "EXCEPTION_PRIV_INSTRUCTION"
    | "EXCEPTION_IN_PAGE_ERROR"
    | "EXCEPTION_ILLEGAL_INSTRUCTION"
    | "EXCEPTION_NONCONTINUABLE_EXCEPTION"
    | "EXCEPTION_STACK_OVERFLOW"
    | "EXCEPTION_INVALID_DISPOSITION"
    | "EXCEPTION_GUARD_PAGE"
    | "EXCEPTION_INVALID_HANDLE";

export interface Crash {
    date?: Date;

    id?: string;

    minidumpExceptionType?: MinidumpExceptionType | string | null;

    rendererCrashReason: string | "killed" | "Unknown" | null;
}

export interface ProcessUtils {
    flushCookies(callback: () => void): Promise<void>;

    flushDNSCache(): Promise<void>;

    flushStorageData(callback: () => void): unknown;

    getCPUCoreCount(): number;

    getCurrentCPUUsagePercent(): number;

    getCurrentMemoryUsageKB(): unknown;

    getLastCrash(): Promise<Crash>;

    getMainArgvSync(): string[];

    purgeMemory(): Promise<void>;
}
