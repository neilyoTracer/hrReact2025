import React, { useEffect, useRef, useState } from 'react';
import { AppBusMittContext, AppDataContext, AppDataSetContext, useAppThemeSetContext } from './app.context';
import { Theme, type AppData } from './models/app-data.model';
import type { ThemeConfig } from 'antd';
import { DefaultTheme } from './theme/defaultThemeToken';
import { DarkTheme } from './theme/darkThemeToken';
import { type AppEvents } from './models/app-event.model';
import mitt from 'mitt';
export function AppDataProvider({ children }: { children: React.ReactNode }) {

    // 这里需要用到useRef来保存这个原始的实例，不然每次渲染函数执行，创建了新的实例
    const appbus = useRef(mitt<AppEvents>());

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
                <AppBusMittContext value={appbus.current}>
                    {children}
                </AppBusMittContext>
            </AppDataSetContext>
        </AppDataContext.Provider>
    )
}