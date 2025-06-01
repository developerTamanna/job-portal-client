import { createBrowserRouter } from 'react-router';
import RootLayout from '../layout/RootLayout';
import Addjob from '../pages/Addjob/Addjob';
import Home from '../pages/Home/Home';
import JobApply from '../pages/JobApply/JobApply';
import JobDetails from '../pages/JobDetails/JobDetails';
import Login from '../pages/Login';
import MyApplications from '../pages/MyApplications/MyApplications';
import MyPostedJobs from '../pages/MyPostedJobs/MyPostedJobs';
import Register from '../pages/Register';
import ViewApplication from '../pages/ViewApplication/ViewApplication';
import PrivateRoutes from '../routes/PrivateRoutes';

const router = createBrowserRouter([
  {
    path: '/',
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
      {
        path: '/jobs/:id',
        loader: ({ params }) =>
          fetch(`http://localhost:3000/jobs/${params.id}`),
        Component: JobDetails,
      },
      {
        path: '/jobApply/:id',
        element: (
          <PrivateRoutes>
            <JobApply></JobApply>
          </PrivateRoutes>
        ),
      },
      {
        path: 'myApplications',
        element: (
          <PrivateRoutes>
            <MyApplications></MyApplications>
          </PrivateRoutes>
        ),
      },
      {
        path: 'addJob',
        element: (
          <PrivateRoutes>
            <Addjob></Addjob>
          </PrivateRoutes>
        ),
      },
      {
        path: '/myPostedJobs',
        element: (
          <PrivateRoutes>
            <MyPostedJobs></MyPostedJobs>
          </PrivateRoutes>
        ),
      },
      {
        path: 'MyApplications/:job_id',
        element: (
          <PrivateRoutes>
            <ViewApplication></ViewApplication>
          </PrivateRoutes>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:3000/applications/job/${params.job_id}`),
      },
    ],
  },
]);

export default router;
