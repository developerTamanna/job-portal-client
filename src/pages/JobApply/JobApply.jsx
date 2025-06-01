import axios from 'axios';
import { Link, useParams } from 'react-router';
import Swal from 'sweetalert2';
import UseAuth from '../../hooks/UseAuth';

const JobApply = () => {
  const { id: jobId } = useParams();
  const { user } = UseAuth();
  // console.log(jobId, user);
  const handleApplyFormSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const github = form.github.value;
    const linkedin = form.linkedin.value;
    const resume = form.resume.value;
    console.log(github, linkedin, resume);
    const application = {
      jobId,
      applicant: user.email,
      github,
      linkedin,
      resume,
    };
    axios
      .post('http://localhost:3000/applications', application)
      .then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your application has been submitted',
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div>
        <form
          onSubmit={handleApplyFormSubmit}
          className="max-w-xl mx-auto p-6 bg-white shadow-lg rounded-2xl space-y-4 mt-10"
        >
          <h2 className="text-2xl font-semibold text-indigo-600 text-center mb-4">
            Job Application Form: <Link to={`/jobs/${jobId}`}>details</Link>
          </h2>

          {/* GitHub Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              GitHub Profile
            </label>
            <input
              type="url"
              name="github"
              placeholder="https://github.com/your-profile"
              className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* LinkedIn Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              LinkedIn Profile
            </label>
            <input
              type="url"
              name="linkedin"
              placeholder="https://linkedin.com/in/your-profile"
              className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Resume Link */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Resume Link
            </label>
            <input
              type="url"
              name="resume"
              placeholder="https://your-resume-link.com"
              className="mt-1 w-full border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          {/* Cover Letter */}

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white font-semibold py-2 rounded-md hover:bg-indigo-700 transition"
            >
              Apply
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default JobApply;
