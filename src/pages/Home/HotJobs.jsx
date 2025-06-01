import { use } from 'react';
import JobsCard from '../Shared/JobsCard';

const HotJobs = ({ jobsPromise }) => {
  const jobs = use(jobsPromise);

  return (
    <div className="px-4 py-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 text-center">🔥 Hot Jobs</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {jobs.map((job) => (
          <JobsCard key={job._id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HotJobs;
