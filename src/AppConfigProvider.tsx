import { ConfigProvider } from "antd";
import { useState } from "react";
import { AppThemeSetContext } from "./app.context";
import { DefaultTheme } from "./theme/defaultThemeToken";



export function AppConfigProvider({ children }: { children: React.ReactNode }) {
    const [themeToken, setThemeToken] = useState(DefaultTheme);
    return (
        <ConfigProvider
            theme={themeToken}>
            <AppThemeSetContext value={setThemeToken}>
                {children}
            </AppThemeSetContext>
        </ConfigProvider>
    )
}