export const ENDPOINTS = {
    get_user: {
        uri: '/auth/me',
        method: 'GET',
    },
    login: {
        uri: '/auth',
        method: 'POST',
    },
    token_validate: {
        uri: '/auth/validate-token',
        method: 'POST',
    },
};

export type ApiEndpoint = keyof typeof ENDPOINTS;
