import { Suspense } from 'react';
import UseAuth from '../../hooks/UseAuth';
import ApplicationList from './ApplicationList';
import ApplicationsState from './ApplicationsState';
import { myApplicationsPromise } from '../../applicationSet';

const MyApplications = () => {
  const { user } = UseAuth();
  return (
    <div>
      <ApplicationsState></ApplicationsState>
      <Suspense fallback={'loading your application'}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(user.email)}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
