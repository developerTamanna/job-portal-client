import { Link } from 'react-router';

const JobsCard = ({ job }) => {
  const {
    _id,
    title,
    location,
    jobType,
    category,
    applicationDeadline,
    salaryRange,
    description,
    company,
    requirements,
    company_logo,
  } = job;

  return (
    <div className="border rounded-xl shadow-md p-5 hover:shadow-lg transition duration-300 bg-white flex flex-col justify-between h-full">
      <div>
        <div className="flex items-center gap-4 mb-4">
          <img
            src={company_logo}
            alt={company}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-gray-500 text-sm">{company}</p>
          </div>
        </div>

        <div className="text-sm text-gray-700 space-y-1 mb-3">
          <p>
            <span className="font-medium">Location:</span> {location}
          </p>
          <p>
            <span className="font-medium">Type:</span> {jobType}
          </p>
          <p>
            <span className="font-medium">Category:</span> {category}
          </p>
          <p>
            <span className="font-medium">Deadline:</span> {applicationDeadline}
          </p>
          <p>
            <span className="font-medium">Salary:</span> {salaryRange.min} -{' '}
            {salaryRange.max} {salaryRange.currency.toUpperCase()}
          </p>
        </div>

        <p className="text-gray-600 text-sm">
          {description.length > 100
            ? description.slice(0, 100) + '...'
            : description}
        </p>

        <p className="text-sm mt-2">
          <span className="font-medium">Skills:</span>{' '}
          {requirements.slice(0, 3).join(', ')}
        </p>
      </div>

      <Link to={`/jobs/${_id}`}>
        <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
          Show Details
        </button>
      </Link>
    </div>
  );
};

export default JobsCard;
