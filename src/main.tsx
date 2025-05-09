import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routes/routes'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Suspense fallback={<h2>🌀 Loading...</h2>}>
        <RouterProvider router={router} />
      </Suspense>
  </StrictMode>
)
