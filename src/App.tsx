import './App.css'
import { Outlet } from 'react-router';
import { AppDataProvider } from './AppDataProvider';
import { Button, Checkbox, Input, Radio, Space, Switch } from 'antd';
import { AppConfigProvider } from './AppConfigProvider';

const App: React.FC = () => (
  <AppConfigProvider>
    <AppDataProvider>
      <Space>
        <Input placeholder="Please Input" />
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Checkbox />
        <Radio />
        <Switch />
      </Space>


      <div className="full-height">
        <Outlet />
      </div>
    </AppDataProvider>

  </AppConfigProvider>
)

/* {


return (
  <AppDataProvider>
    <div className="full-height">
      <Outlet />
    </div>
  </AppDataProvider>
)
} */

export default App
