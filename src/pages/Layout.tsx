import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router";
import { useAppDataSet } from "../app.context";
import { removeToken } from "../utils/auth.utils";

export function Layout() {
    const setAppData = useAppDataSet();
    const loaderData = useLoaderData();
    const navigate = useNavigate();
    useEffect(() => {
        console.log(loaderData, 'Layout###########');
        setAppData!(appData => ({
            ...appData,
            ...loaderData
        }))
    }, [setAppData, loaderData])

    function logout() {
        removeToken();
        setAppData!(appdata => ({
            ...appdata,
            token: null
        }))
        navigate('/login');
    }

    return (
        <div>
            Layout
            <button onClick={logout}>Logout</button>
            <Outlet />
        </div>
    );
}