export declare enum FEATURE_FLAGS {
    RUN_SEEDS = 0
}
type FeatureFlagEnabledShape = {
    a?: boolean;
    d?: boolean;
};
export type FeatureFlagShape = Record<FEATURE_FLAGS, {
    enabled: FeatureFlagEnabledShape;
} & Record<string, FeatureFlagEnabledShape | string | boolean | number>>;
export declare const FEATURE_FLAG_CONFIG: {
    0: {
        enabled: {
            a: boolean;
            d: boolean;
        };
    };
};
export declare const isFlagEnabled: (f: FEATURE_FLAGS) => boolean;
export {};
