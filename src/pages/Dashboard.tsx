import { useStyleRegister } from 'antd/es/theme/internal';
import { Button, theme } from "antd";
const { useToken } = theme;

export function Dashboard() {
    const AppTitle = import.meta.env.VITE_APP_TITLE;
    const { token, hashId } = useToken();
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
                background: token.hrTxColor,
            }
        })
    )();
    return (
        // @ts-ignore
        <div style={{ background: token.hrBgColor, color: token.hrTxColor }}>
            {AppTitle}
            <div className={`theme-test ${hashId}`}></div>
            <Button type="primary">Ant Button</Button>
        </div>
    )
}