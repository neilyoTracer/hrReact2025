import React, { useEffect, useState } from 'react';
import { AppDataContext, AppDataSetContext, useAppThemeSetContext } from './app.context';
import { Theme, type AppData } from './models/app-data.model';
import type { ThemeConfig } from 'antd';
import { DefaultTheme } from './theme/defaultThemeToken';
import { DarkTheme } from './theme/darkThemeToken';
export function AppDataProvider({ children }: { children: React.ReactNode }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const setAppTheme = useAppThemeSetContext()!;
    const [appData, setAppData] = useState({
        theme: Theme.Light,
        useInfo: null,
        permissions: [],
        token: null
    } as AppData);
    useEffect(() => {
        const themeToken: ThemeConfig = appData.theme === Theme.Light ? DefaultTheme : DarkTheme
        setAppTheme({
            ...themeToken,
            components: {
                Menu: {
                    darkItemBg: 'rgb(20, 20, 20)',
                    itemBg: 'rgb(255, 255, 255)'
                }
            }
        })
    }, [appData.theme])
    return (
        <AppDataContext.Provider value={appData}>
            <AppDataSetContext value={setAppData}>
                {children}
            </AppDataSetContext>
        </AppDataContext.Provider>
    )
}