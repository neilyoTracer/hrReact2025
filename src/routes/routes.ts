import { createBrowserRouter, redirect } from "react-router";
import { Login } from "../pages/Login";
import App from "../App";
import { LayoutPage } from "../components/LayoutPage";
import { NoAuth } from "../pages/NoAuth";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                loader: () => redirect('streetlight')
            },
            {
                path: 'streetlight',
                Component: LayoutPage,
                lazy: {
                    loader: async () => (await import('./loaders')).appLoader
                },
                children: [
                    {
                        index: true,
                        loader: () => redirect('dashboard')
                    },
                    {
                        path: 'dashboard',
                        lazy: {
                            Component: async () => (await import('../pages/Dashboard')).Dashboard,
                        },
                        // Component: Dashboard
                    },
                    {
                        path: 'no-auth',
                        Component: NoAuth,
                        // Component: Dashboard
                    }
                ]
            },
            {
                path: 'login',
                Component: Login
            }
        ]
    }
]);