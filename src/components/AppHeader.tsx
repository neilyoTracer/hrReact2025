import { Button, Layout, theme as AntdTheme } from "antd";
import {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
} from '@ant-design/icons';
import { Theme } from "../models/app-data.model";
import { useAppData, useAppDataSet } from "../app.context";

export const HeaderPart = ({ onCollapsedChange, collapsed }) => {
    const setAppData = useAppDataSet()!;
    const { theme } = useAppData()!;
    const {
        token: { boxShadowSecondary, colorBgContainer }
    } = AntdTheme.useToken();
    function changeAppTheme() {
        setAppData(appdata => ({
            ...appdata,
            theme: theme === Theme.Light ? Theme.Dark : Theme.Light
        }))
    }
    return (
        <Layout.Header className="flex flex-items-center flex-justify-between" style={{ padding: '0 5px', background: colorBgContainer, height: 40, boxShadow: boxShadowSecondary }}>
            <Button
                type="text"
                icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                onClick={() => onCollapsedChange(!collapsed)}
                style={{
                    fontSize: '16px',
                    width: 40,
                    height: 40,
                }}
            />

            <div className="opt-part" style={{lineHeight: 40}}>
                <Button onClick={changeAppTheme}>{theme === Theme.Light ? 'Dark' : 'Light'}</Button>
            </div>
        </Layout.Header>
    )
}