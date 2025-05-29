import './App.css'
import { Outlet } from 'react-router';
import { AppDataProvider } from './AppDataProvider';
import { AppConfigProvider } from './AppConfigProvider';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

const App: React.FC = () => (
  <QueryClientProvider client={queryClient}>
    <AppConfigProvider>
      <AppDataProvider>
        <div className="full-height">
          <Outlet />
        </div>
      </AppDataProvider>
    </AppConfigProvider>
    <ReactQueryDevtools initialIsOpen={true}></ReactQueryDevtools>
  </QueryClientProvider>
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
