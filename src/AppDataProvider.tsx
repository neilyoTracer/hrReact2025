import React, { useState } from 'react';
import { AppDataContext, AppDataSetContext } from './app.context';
import { Theme, type AppData } from './models/app-data.model';
export function AppDataProvider({ children }: { children: React.ReactNode }) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [appData, setAppData] = useState({
        theme: Theme.Dark,
        useInfo: null,
        permissions: [],
        token: null
    } as AppData);
    return (
        <AppDataContext.Provider value={appData}>
            <AppDataSetContext value={setAppData}>
                {children}
            </AppDataSetContext>
        </AppDataContext.Provider>
    )
}