import axios from 'axios';
import { useLoaderData, useParams } from 'react-router';
import Swal from 'sweetalert2';

const ViewApplication = () => {
  const { job_id } = useParams();
  const applications = useLoaderData();
  const handleStatusChange = (e, app_id) => {
    console.log(e.target.value, app_id);
    axios
      .patch(`http://localhost:3000/applications/${app_id}`, {
        status: e.target.value,
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.modifiedCount) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'applications status updated',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          View Applications for Job ID: {job_id}
        </h1>

        {applications.length === 0 ? (
          <p className="text-gray-500 text-center py-10">
            ❌ No applications found for this job.
          </p>
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-sm text-left text-gray-700 border border-gray-200">
              <thead className="bg-gray-100 border-b">
                <tr>
                  <th className="px-4 py-2">#</th>
                  <th className="px-4 py-2">Applicant Email</th>
                  <th className="px-4 py-2">GitHub</th>
                  <th className="px-4 py-2">LinkedIn</th>
                  <th className="px-4 py-2">Resume</th>
                  <th className="px-4 py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((app, index) => (
                  <tr key={app._id} className="border-b hover:bg-gray-50">
                    <td className="px-4 py-2">{index + 1}</td>
                    <td className="px-4 py-2">{app.applicant}</td>
                    <td className="px-4 py-2">
                      <a
                        href={app.github}
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        GitHub
                      </a>
                    </td>
                    <td className="px-4 py-2">
                      <a
                        href={app.linkedin}
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        LinkedIn
                      </a>
                    </td>
                    <td className="px-4 py-2">
                      <a
                        href={app.resume}
                        className="text-blue-600 underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resume
                      </a>
                    </td>
                    <td className="px-4 py-2">
                      <select
                        onChange={(e) => handleStatusChange(e, app._id)}
                        defaultValue={app.status || 'Pending'}
                        className="border border-gray-300 rounded-md px-2 py-1"
                      >
                        <option value="Pending">Pending</option>
                        <option value="Interview">Interview</option>
                        <option value="Hired">Hired</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewApplication;
