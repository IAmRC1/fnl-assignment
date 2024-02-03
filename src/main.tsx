import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Users from './components/Users';
import Album from './components/Albums';
import Photo from './components/Photos';
import ErrorPage from './components/ErrorPage';
import App from './App.tsx'
import './index.css'

const router = createBrowserRouter([{
    path: '/',
    element: <App />,
    children: [
    {
        path: 'users',
        element: <Users />,
    }, {
        path: 'users/:userId/albums',
        element: <Album />,
    }, {
        path: 'users/:userId/albums/:albumId/photos',
        element: <Photo />,
    }, {
        path: '*',
        element: <ErrorPage />,
    }],
}]);

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
    </QueryClientProvider>,
)
