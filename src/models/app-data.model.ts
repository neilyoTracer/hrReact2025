
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
    theme: Theme,
    useInfo: any,
    permissions: PermissionEnum[]
}