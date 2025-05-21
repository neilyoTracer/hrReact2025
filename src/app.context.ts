import { createContext, useContext, type Dispatch, type SetStateAction } from "react";
import type { AppData } from "./models/app-data.model";
import type { ThemeConfig } from "antd";

export const AppDataContext = createContext<AppData | null>(null);
export const AppDataSetContext = createContext<Dispatch<SetStateAction<AppData>> | null>(null);
export const AppThemeSetContext = createContext<Dispatch<SetStateAction<ThemeConfig>> | null>(null);

export function useAppData() {
    return useContext(AppDataContext);
}

export function useAppDataSet() {
    return useContext(AppDataSetContext);
}

export function useAppThemeSetContext() {
    return useContext(AppThemeSetContext);
}


