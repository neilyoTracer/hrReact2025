import { redirect } from "react-router";
import { getToken } from "../utils/auth.utils";
import { queryUserInfo, queryUserPermission } from "../api/test.api";
import type { PermissionEnum } from "../models/app-data.model";

export async function appLoader() {
    const token = getToken();
    if (!token) {
        return redirect('/login');
    }

    let userInfo;
    try {
        userInfo = await queryUserInfo();
    } catch {
        console.error('some api error from quering user info!');
        userInfo = null;
    }

    let permissions: PermissionEnum[] = [];
    try {
        permissions = await queryUserPermission();
    } catch {
        console.error('some api error from quering permissions!');
    }

    return { token, userInfo, permissions: permissions || [] }
}