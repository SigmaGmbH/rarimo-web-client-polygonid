import { AnimatePresence } from 'framer-motion'
import { lazy, Suspense } from 'react'
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from 'react-router-dom'

import { AppNavbar } from '@/common'
import { RoutesPaths } from '@/enums'
import { AuthLayout } from '@/layouts'

export const AppRoutes = () => {
  const AuthProviders = lazy(() => import('@/pages/AuthProviders'))
  const AuthPreview = lazy(() => import('@/pages/AuthPreview'))

  const router = createBrowserRouter([
    {
      path: RoutesPaths.app,
      element: (
        <Suspense fallback={<></>}>
          <AppNavbar />
          <AnimatePresence>
            <div className='app__main'>
              <Outlet />
            </div>
          </AnimatePresence>
        </Suspense>
      ),
      children: [
        {
          path: RoutesPaths.auth,
          element: <AuthLayout />,
          children: [
            {
              index: true,
              path: RoutesPaths.authProviders,
              element: <AuthProviders />,
            },
            {
              path: RoutesPaths.authPreview,
              element: <AuthPreview />,
            },
          ],
        },
        {
          path: '/',
          element: <Navigate replace to={RoutesPaths.authProviders} />,
        },
        {
          path: '*',
          element: <Navigate replace to={RoutesPaths.authProviders} />,
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
