import './App.css'
import { Outlet } from 'react-router';
import { AppDataProvider } from './AppDataProvider';

function App() {


  return (
    <AppDataProvider>
      <div className="full-height">
        <Outlet />
      </div>
    </AppDataProvider>
  )
}

export default App
