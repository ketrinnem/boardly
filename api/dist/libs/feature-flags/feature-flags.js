export var FEATURE_FLAGS;
(function (FEATURE_FLAGS) {
    FEATURE_FLAGS[FEATURE_FLAGS["RUN_SEEDS"] = 0] = "RUN_SEEDS";
})(FEATURE_FLAGS || (FEATURE_FLAGS = {}));
export const FEATURE_FLAG_CONFIG = {
    [FEATURE_FLAGS.RUN_SEEDS]: {
        enabled: {
            a: false,
            d: false,
        },
    },
};
export const isFlagEnabled = (f) => {
    const cleanEnvName = 'a';
    const specificValue = FEATURE_FLAG_CONFIG[f].enabled[cleanEnvName];
    if (typeof specificValue !== undefined)
        return specificValue;
    return false;
};
//# sourceMappingURL=feature-flags.js.map