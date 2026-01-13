import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
    return (
        <Switch>


            {!!user && (
                <>
                    {(location.pathname === '/' ||
                        location.pathname === '/sign-in' ||
                        location.pathname === '/error-500') && (
                            <Redirect to={routeNames.dashboard()} />
                        )}
                    <Route path={routeNames.dashboard()}>
                        <DashboardRouter user={user} />
                    </Route>
                </>
            )}
        </Switch>
    );
}

export default Router;
