import { use } from 'react';

const ApplicationList = ({ myApplicationsPromise }) => {
  const applications = use(myApplicationsPromise);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-4">
      <h2 className="text-2xl font-semibold mb-4">
        Job Applied For: {applications.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table w-full border border-gray-300">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 border">#</th>
              <th className="px-4 py-2 border">Applicant</th>
              <th className="px-4 py-2 border">GitHub</th>
              <th className="px-4 py-2 border">LinkedIn</th>
              <th className="px-4 py-2 border">Resume</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, index) => (
              <tr key={app._id}>
                <td className="px-4 py-2 border text-center">{index + 1}</td>
                <td className="px-4 py-2 border">{app.applicant}</td>
                <td className="px-4 py-2 border">
                  <a
                    href={app.github}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    GitHub
                  </a>
                </td>
                <td className="px-4 py-2 border">
                  <a
                    href={app.linkedin}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    LinkedIn
                  </a>
                </td>
                <td className="px-4 py-2 border">
                  <a
                    href={app.resume}
                    target="_blank"
                    className="text-blue-600 underline"
                  >
                    Resume
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationList;
