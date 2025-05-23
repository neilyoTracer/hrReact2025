import { useAppData } from "../app.context";
import type { AppData, PermissionEnum } from "../models/app-data.model";

export function usePermissions() {
    const { permissions } = useAppData() as AppData;
    function hasAuth(per: PermissionEnum) {
        return permissions.includes(per);
    }
    return {hasAuth};
}