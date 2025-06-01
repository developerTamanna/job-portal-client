import { Suspense } from 'react';
import { myApplicationsPromise } from '../../applicationSet';
import UseAuth from '../../hooks/UseAuth';
import ApplicationList from './ApplicationList';
import ApplicationsState from './ApplicationsState';

const MyApplications = () => {
  const { user } = UseAuth();
  console.log('token firebase token', user.accessToken);
  return (
    <div>
      <ApplicationsState></ApplicationsState>
      <Suspense fallback={'loading your application'}>
        <ApplicationList
          myApplicationsPromise={myApplicationsPromise(
            user.email,
            user.accessToken
          )}
        ></ApplicationList>
      </Suspense>
    </div>
  );
};

export default MyApplications;
