import { createContext, PropsWithChildren, useContext } from 'react';
import { useQuery } from 'react-query';
import api from '@tyrio/api-factory';
import { DBUserApi } from '@tyrio/dto';


type UserContextInterface = {
    user: DBUserApi['getOne']['response'] | null;
    userLoading?: boolean;
    userAuthenticated: boolean;
    userError?: unknown | null;
    refetchUser: () => void;
};

export const UserContext = createContext<UserContextInterface>({
    user: null,
    userLoading: false,
    userError: null,
    refetchUser: () => null,
    userAuthenticated: false,
});

const useAuthProviderData = () => {
    const {
        isFetching,
        isLoading,
        error,
        data: user,
        refetch: refetchUser,
    } = useQuery(['me'], () => api.fetch<DBUserApi['getOne']>('get_user'), {
        initialData: null,
        retry: false,
        refetchOnReconnect: true,
        refetchOnWindowFocus: false,
    });



    return {
        user: user ?? null,
        userError: error,
        userLoading: isFetching || isLoading,
        userAuthenticated: !!(user && user.email),
        refetchUser,
    };
};

const AuthProvider = ({
    children,
}: PropsWithChildren<Record<string, unknown>>) => {
    const data = useAuthProviderData();
    return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};

export default AuthProvider;
export const useAuth = () => useContext(UserContext);
