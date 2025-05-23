import { Menu } from "antd"
import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { useAppData } from "../app.context";
import { Theme } from "../models/app-data.model";

export const SideMenu = () => {
    const { theme } = useAppData()!;
    return (
        <>
            <div className="demo-logo-vertical"></div>
            <Menu
                theme={theme === Theme.Light ? 'light':'dark'}
                mode="inline"
                defaultSelectedKeys={['1']}
                items={[
                    {
                        key: '1',
                        icon: <UserOutlined />,
                        label: 'nav 1',
                    },
                    {
                        key: '2',
                        icon: <VideoCameraOutlined />,
                        label: 'nav 2',
                    },
                    {
                        key: '3',
                        icon: <UploadOutlined />,
                        label: 'nav 3',
                    },
                ]}
            />
        </>
    )
}