import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.less'
import { RouterProvider } from 'react-router'
import { router } from './routes/routes'
import '@ant-design/v5-patch-for-react-19';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<h2>🌀 Loading...</h2>}>
        <RouterProvider router={router} />
      </Suspense>
  </StrictMode>
)
