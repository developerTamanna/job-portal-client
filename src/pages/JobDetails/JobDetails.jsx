import React from 'react';
import { useLoaderData, Link } from 'react-router';

const JobDetails = () => {
  const job = useLoaderData();

  if (!job) {
    return (
      <p className="text-center py-10 text-gray-600">Loading job details...</p>
    );
  }

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
    requirements = [],
    responsibilities = [],
    status,
    hr_email,
    hr_name,
    company_logo,
  } = job;

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
          <img
            src={company_logo}
            alt={company}
            className="w-20 h-20 rounded-full border border-gray-300"
          />
          <div className="text-center sm:text-left">
            <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
            <p className="text-gray-600">{company}</p>
            <p className="text-sm text-blue-600 mt-1">
              {status?.toUpperCase() || 'N/A'}
            </p>
          </div>
        </div>

        {/* Job Info */}
        <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700 mb-6">
          <p>
            <strong>📍 Location:</strong> {location || 'N/A'}
          </p>
          <p>
            <strong>💼 Type:</strong> {jobType || 'N/A'}
          </p>
          <p>
            <strong>📂 Category:</strong> {category || 'N/A'}
          </p>
          <p>
            <strong>📅 Deadline:</strong> {applicationDeadline || 'N/A'}
          </p>
          <p>
            <strong>💰 Salary:</strong> {salaryRange?.min} - {salaryRange?.max}{' '}
            {salaryRange?.currency?.toUpperCase() || ''}
          </p>
        </div>

        {/* Description */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            📝 Job Description
          </h2>
          <p className="text-gray-600">{description || 'Not available'}</p>
        </div>

        {/* Requirements */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            ✅ Requirements
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {requirements.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Responsibilities */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            📌 Responsibilities
          </h2>
          <ul className="list-disc list-inside space-y-1 text-gray-600">
            {responsibilities.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* HR Info */}
        <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg mb-6">
          <h3 className="text-md font-semibold text-blue-700 mb-2">
            👤 HR Contact
          </h3>
          <p>
            <span className="font-medium">Name:</span> {hr_name || 'N/A'}
          </p>
          <p>
            <span className="font-medium">Email:</span> {hr_email || 'N/A'}
          </p>
        </div>

        {/* Apply Now Button */}
        <div className="text-center mt-6">
          <Link to={`/jobApply/${_id}`}>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
