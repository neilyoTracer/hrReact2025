import { PermissionEnum } from "../models/app-data.model";

export function login() {
    return new Promise<{token: string}>(rs => {
        setTimeout(() => {
            rs({
                token:'xxx'
            })
        }, 500);
    });
}

export function queryUserInfo() {
    return new Promise<object | null>(rs => {
        setTimeout(() => {
            rs({
                userId: 4,
                userName: 'test'
            })
        }, 500);
    });
}

export function queryUserPermission() {
    return new Promise<PermissionEnum[]>(rs => {
        setTimeout(() => {
            rs([PermissionEnum.Dashboard, PermissionEnum.Test])
        }, 500);
    });
}