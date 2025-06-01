import { Suspense } from 'react';
import { jobsCreatedByPromise } from '../../api/jobsApi';
import UseAuth from '../../hooks/UseAuth';
import JobList from './JobList';

const MyPostedJobs = () => {
  const { user } = UseAuth();
  return (
    <div>
      <h1>myPostedJobs</h1>
      <Suspense>
        <JobList
          jobsCreatedByPromise={jobsCreatedByPromise(user.email)}
        ></JobList>
      </Suspense>
    </div>
  );
};

export default MyPostedJobs;
