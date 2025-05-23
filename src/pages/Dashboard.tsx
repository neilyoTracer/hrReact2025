import { useStyleRegister } from 'antd/es/theme/internal';
import { Button, theme } from "antd";
import { Navigate } from 'react-router';
import { usePermissions } from '../hooks/usePermissions';
import { PermissionEnum } from '../models/app-data.model';
const { useToken } = theme;

export function Dashboard() {
    const AppTitle = import.meta.env.VITE_APP_TITLE;
    const { token, hashId } = useToken();
    const {colorBgContainer, hrTxColor} = token;
    /* const {permissions} = useAppData() as AppData;
    if(!permissions.includes(PermissionEnum.Dashboard)) {
        return <Navigate to="/streetlight/no-auth" replace />;
    } */
   const {hasAuth} = usePermissions();
   if(!hasAuth(PermissionEnum.Dashboard)) {
        return <Navigate to="/streetlight/no-auth" replace />;
   }
    // @ts-ignore
    useStyleRegister(
        // @ts-ignore
        { theme, token, hashId, path: ['Dashboard'] },
        () => ({
            '.theme-test::before': {
                content: '" "', // note
                display: 'block',
                width: '20px',
                height: '20px',
                // @ts-ignore
                background: hrTxColor,
            }
        })
    )();
    return (
        // @ts-ignore
        <div className="w-100 h-100 overflow-auto" style={{ background: colorBgContainer }}>
            {AppTitle}
            <div className={`theme-test ${hashId}`}></div>
            <Button type="primary">Ant Button</Button>
        </div>
    )
}