import './App.css'
import { Outlet } from 'react-router';
import { AppDataProvider } from './AppDataProvider';
import { AppConfigProvider } from './AppConfigProvider';

const App: React.FC = () => (
  <AppConfigProvider>
    <AppDataProvider>
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
