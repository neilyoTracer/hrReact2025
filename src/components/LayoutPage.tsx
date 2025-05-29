import { useEffect, useState, useTransition } from "react";
import { Outlet, useLoaderData, useNavigate } from "react-router";
import { useAppDataSet } from "../app.context";
import { removeToken } from "../utils/auth.utils";
import { Layout, theme as AntdTheme } from "antd";
import { SideMenu } from "./SideMenu";
import { HeaderPart } from "./AppHeader";
const { Sider, Content } = Layout;


export function LayoutPage() {
    const [showPage, setShowPage] = useState(false);
    const [isPending, startTransition] = useTransition();
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { hrBgColor, borderRadiusXS, colorBgContainer }
    } = AntdTheme.useToken();
    const setAppData = useAppDataSet()!;
    const loaderData = useLoaderData();
    const navigate = useNavigate();
    useEffect(() => {
        // console.log(loaderData, 'Layout###########');
        setAppData!(appData => ({
            ...appData,
            ...loaderData
        }))
    }, [setAppData, loaderData])

    // defer to render outlet, because of the permission data
    useEffect(() => {
        const clearId = setTimeout(() => {
            startTransition(() => {
                setShowPage(true);
            });
        })
        return () => clearTimeout(clearId)
    }, [])

    function logout() {
        removeToken();
        setAppData(appdata => ({
            ...appdata,
            token: null
        }))
        navigate('/login');
    }

    /* <div>
            Layout
            <button onClick={logout}>Logout</button>
            <Button onClick={changeAppTheme}>{theme === Theme.Light ? 'Dark' : 'Light'}</Button>
            <Outlet />
        </div> */
    return (
        <Layout style={{ height: '100%' }}>
            <Sider trigger={null} collapsible collapsed={collapsed} style={{ background: colorBgContainer }}>
                <SideMenu></SideMenu>
            </Sider>
            <Layout style={{ background: 'transparent' }}>
                <HeaderPart onCollapsedChange={setCollapsed} collapsed={collapsed}></HeaderPart>

                
                    <Content style={{
                        padding: 5,
                        minHeight: 280,
                        background: hrBgColor,
                        borderRadius: borderRadiusXS
                    }}>
                       { showPage && <Outlet /> }
                    </Content>

            </Layout>
        </Layout>
    );
}