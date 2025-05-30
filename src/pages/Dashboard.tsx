import { useStyleRegister } from 'antd/es/theme/internal';
import { Button, theme } from "antd";
import { Navigate } from 'react-router';
import { usePermissions } from '../hooks/usePermissions';
import { PermissionEnum } from '../models/app-data.model';
import { useEffect } from 'react';
import { AppCustomEvent, type GlobalMessage } from '../models/app-event.model';
import { useBus } from '../app.context';
const { useToken } = theme;

export function Dashboard() {
    const bus = useBus();
    const AppTitle = __APP_TITLE2__;
    const { token, hashId } = useToken();
    const { colorBgContainer, hrTxColor } = token;
    /* const {permissions} = useAppData() as AppData;
    if(!permissions.includes(PermissionEnum.Dashboard)) {
        return <Navigate to="/streetlight/no-auth" replace />;
    } */
    const { hasAuth } = usePermissions();
    if (!hasAuth(PermissionEnum.Dashboard)) {
        console.log('Dashboard');
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

    useEffect(() => {
        const customEventHandler = ({data, type}: GlobalMessage) => {
            console.log(data, 'data from global event');
        }
        
        bus?.on(AppCustomEvent, customEventHandler);
        return () => {
            bus?.off(AppCustomEvent, customEventHandler)
        }
    }, [])
    return (
        // @ts-ignore
        <div className="w-100 h-100 overflow-auto" style={{ background: colorBgContainer }}>
            {AppTitle}
            <div className={`theme-test ${hashId}`}></div>
            <Button type="primary">Ant Button</Button>
        </div>
    )
}