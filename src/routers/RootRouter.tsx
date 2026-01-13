/* eslint-disable @typescript-eslint/no-explicit-any */
import CloseIcon from '@mui/icons-material/Close';
import { CircularProgress, } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import {
    Route,
    useLocation,
} from 'react-router-dom';

export const RootRouter = () => {


    const location = useLocation();



    return (
        <>

            <Switch>


                {(location.pathname === '/' ||
                    location.pathname === '/sign-in' ||
                    location.pathname === '/error-500') && (
                        <Redirect to={routeNames.dashboard()} />
                    )}
                <Route path={routeNames.dashboard()}>
                    <DashboardRouter user={user} />
                </Route>


                {/* <Route exact path={routeNames.noPermission()}>
                    <NoPermissionsPage />
                </Route>
                <Route path="*">
                    <PageNotFound />
                </Route> */}
            </Switch>
        </>
    );
};
