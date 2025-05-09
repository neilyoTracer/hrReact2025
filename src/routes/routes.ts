import { createBrowserRouter, redirect } from "react-router";
import { Layout } from "../pages/Layout";
import { Login } from "../pages/Login";
import App from "../App";

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
                Component: Layout,
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