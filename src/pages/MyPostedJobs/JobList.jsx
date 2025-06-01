import { use } from 'react';
import { Link } from 'react-router';

const JobList = ({ jobsCreatedByPromise }) => {
  const jobs = use(jobsCreatedByPromise);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        Jobs Created By You: {jobs.length}
      </h1>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full border border-gray-300">
          <thead className="bg-base-200 text-base font-semibold text-gray-700">
            <tr>
              <th>#</th>
              <th>Job Title</th>
              <th>Company</th>
              <th>Location</th>
              <th>Type</th>
              <th>Category</th>
              <th>Deadline</th>
              <th>Salary</th>
              <th>HR Info</th>
              <th>Logo</th>
              <th>Action</th> {/* New column */}
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={job._id}>
                <td>{index + 1}</td>
                <td>{job.title}</td>
                <td>{job.company}</td>
                <td>{job.location}</td>
                <td>{job.jobType}</td>
                <td>{job.category}</td>
                <td>{job.deadline}</td>
                <td>
                  {job.salaryRange.min} - {job.salaryRange.max}{' '}
                  {job.salaryRange.currency}
                </td>
                <td>
                  <div>
                    <p className="font-medium">{job.hr_name}</p>
                    <p className="text-sm text-gray-500">{job.hr_email}</p>
                  </div>
                </td>
                <td>
                  <img
                    src={job.company_logo}
                    alt="logo"
                    className="w-10 h-10 rounded"
                  />
                </td>
                <td>
                  <Link
                    to={`/MyApplications/${job._id}`}
                    className="btn btn-sm btn-outline btn-primary"
                  >
                    View Applications
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default JobList;
