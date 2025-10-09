export enum FEATURE_FLAGS {
    RUN_SEEDS
}


type FeatureFlagEnabledShape = {
    a?: boolean;
    d?: boolean;
};

export type FeatureFlagShape = Record<
    FEATURE_FLAGS,
    {
        enabled: FeatureFlagEnabledShape;
    } & Record<string, FeatureFlagEnabledShape | string | boolean | number>
>;

export const FEATURE_FLAG_CONFIG = {
    [FEATURE_FLAGS.RUN_SEEDS]: {
        enabled: {
            a: false,
            d: false,
        },
    },
}

export const isFlagEnabled = (f: FEATURE_FLAGS) => {
    const cleanEnvName = 'a';
    const specificValue = FEATURE_FLAG_CONFIG[f].enabled[cleanEnvName];

    if (typeof specificValue !== undefined) return specificValue;

    return false;
};
