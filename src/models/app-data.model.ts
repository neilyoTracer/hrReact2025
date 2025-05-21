
export enum PermissionEnum {
    Dashboard = 'Dashboard',
    Test = 'Test',
}

export enum Theme {
    Dark = 'dark',
    Light = 'light',
}

export interface AppData {
    token: string | null,
    useInfo: any,
    permissions: PermissionEnum[]
    theme?: Theme,
}