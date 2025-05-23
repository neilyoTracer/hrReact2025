import { theme, type ThemeConfig } from "antd";

export const DarkTheme: ThemeConfig = {
    token: {
        // @ts-ignore
        hrBgColor: 'rgba(0, 0, 0, .2)',
        hrTxColor: '#fff'
    },
    algorithm: theme.darkAlgorithm,
};
