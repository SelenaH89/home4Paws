import { createBrowserRouter } from 'react-router-dom';
import Adopt from '../adopt/Adopt';
import DonationPage from '../adopt/DonationPage';
import SingleDog from '../adopt/SingleDog';
import App from '../App';
import About from '../components/About';
import Blog from '../components/Blog';
import Login from '../components/Login';
import { Logout } from '../components/Logout';
import Signup from '../components/Signup';
import AddDog from '../dashboard/AddDog';
import Dashboard from '../dashboard/Dashboard';
import DashboardLayout from '../dashboard/DashboardLayout';
import EditDogs from '../dashboard/EditDogs';
import ManageDogs from '../dashboard/ManageDogs';
import Home from '../home/Home';
import PrivateRoute from '../privateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/adopt',
        element: <Adopt />,
      },
      {
        path: '/donationPage',
        element: <DonationPage />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/dog/:id',
        element: <SingleDog />,
        loader: ({ params }) => fetch(`http://localhost:3000/dog/${params.id}`),
      },
    ],
  },
  {
    path: '/admin/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/admin/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: '/admin/dashboard/add',
        element: <AddDog />,
      },
      {
        path: '/admin/dashboard/manage',
        element: <ManageDogs />,
      },
      {
        path: '/admin/dashboard/edit-dogs/:id',
        element: <EditDogs />,
        loader: ({ params }) => fetch(`http://localhost:3000/dog/${params.id}`),
      },
    ],
  },
  {
    path: 'sign-up',
    element: <Signup />,
  },
  {
    path: 'login',
    element: <Login />,
  },
  {
    path: 'logout',
    element: <Logout />,
  },
]);
export default router;
