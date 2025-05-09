import { useEffect } from "react";
import { Outlet, useLoaderData } from "react-router";
import { useAppDataSet } from "../app.context";

export function Layout() {
    const setAppData = useAppDataSet();
    const loaderData = useLoaderData();
    useEffect(() => {
        console.log(loaderData, 'Layout###########');
        setAppData!(appData => ({
            ...appData,
            ...loaderData
        }))
    }, [setAppData, loaderData])
    return (
        <div>
            Layout
            <Outlet />
        </div>
    );
}