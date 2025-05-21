import { useEffect } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router";
import { useAppData, useAppDataSet } from "../app.context";
import { removeToken } from "../utils/auth.utils";
import { Button } from "antd";
import { Theme } from "../models/app-data.model";

export function Layout() {
    const setAppData = useAppDataSet()!;
    const loaderData = useLoaderData();
    const {theme} = useAppData()!;
    const navigate = useNavigate();
    useEffect(() => {
        // console.log(loaderData, 'Layout###########');
        setAppData!(appData => ({
            ...appData,
            ...loaderData
        }))
    }, [setAppData, loaderData])

    function changeAppTheme() {
        setAppData(appdata => ({
            ...appdata,
            theme: theme === Theme.Light ? Theme.Dark : Theme.Light
        }))
    }

    function logout() {
        removeToken();
        setAppData(appdata => ({
            ...appdata,
            token: null
        }))
        navigate('/login');
    }

    return (
        <div>
            Layout
            <button onClick={logout}>Logout</button>
            <Button onClick={changeAppTheme}>{theme === Theme.Light ? 'Dark' : 'Light'}</Button>
            <Outlet />
        </div>
    );
}