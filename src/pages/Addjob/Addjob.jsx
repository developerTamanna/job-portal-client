import axios from 'axios';
import Swal from 'sweetalert2';
import UseAuth from '../../hooks/UseAuth';

const Addjob = () => {
  const { user } = UseAuth();
  //next
  const handleAddAJob = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    // console.log(formData.entries());
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    //process salary range applications
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };
    //proses requirements
    // newJob.requirements = newJob.requirements.split(',')
    const requirementsString = newJob.requirements;
    const requirementsDirty = requirementsString.split(',');
    const requirementsClean = requirementsDirty.map((req) => req.trim());
    newJob.requirements = requirementsClean;
    // console.log(requirementsDirty, requirementsClean);
    //**process responsibilities*/
    newJob.responsibilities = newJob.responsibilities
      .split(',')
      .map((res) => res.trim());
    const status = 'active';
    // console.log(Object.keys(newJob).length);
    console.log(newJob);
    //save job to the db
    axios
      .post('http://localhost:3000/jobs', newJob)
      .then((res) => {
        // console.log(res);
        if (res.data.insertedId) {
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'the new job has been saved and publish',
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
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Please add a job
      </h2>
      <form onSubmit={handleAddAJob} className="space-y-6">
        {/* Basic Info */}
        <fieldset className="bg-base-200 border border-base-300 rounded-xl p-6 shadow">
          <legend className="text-lg font-semibold text-gray-700">
            Basic Info
          </legend>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="label">Job Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                placeholder="Job Title"
              />
            </div>

            <div>
              <label className="label">Company</label>
              <input
                type="text"
                name="company"
                className="input w-full"
                placeholder="Company Name"
              />
            </div>

            <div>
              <label className="label">Location</label>
              <input
                type="text"
                name="location"
                className="input w-full"
                placeholder="Company Location"
              />
            </div>

            <div>
              <label className="label">Company logo</label>
              <input
                type="text"
                name="company_logo"
                className="input w-full"
                placeholder="Company Logo URL"
              />
            </div>
          </div>
        </fieldset>

        {/* Job Type */}
        <fieldset className="bg-base-200 border border-base-300 rounded-xl p-6 shadow">
          <legend className="text-lg font-semibold text-gray-700">
            Job Type
          </legend>
          <div className="flex flex-wrap gap-3 mt-4">
            <input
              className="btn btn-outline"
              type="radio"
              name="jobType"
              aria-label="All"
            />
            <input
              className="btn btn-outline"
              type="radio"
              name="jobType"
              value="On-Site"
              aria-label="On-Site"
            />
            <input
              className="btn btn-outline"
              type="radio"
              name="jobType"
              value="Remote"
              aria-label="Remote"
            />
            <input
              className="btn btn-outline"
              type="radio"
              name="jobType"
              value="Hybrid"
              aria-label="Hybrid"
            />
          </div>
        </fieldset>

        {/* Job Category */}
        <fieldset className="bg-base-200 border border-base-300 rounded-xl p-6 shadow">
          <legend className="text-lg font-semibold text-gray-700">
            Job Category
          </legend>
          <select
            defaultValue="Job Category"
            name="category"
            className="select w-full mt-4"
          >
            <option disabled={true}>Job Category</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
          </select>
        </fieldset>

        {/* Application Deadline */}
        <fieldset className="bg-base-200 border border-base-300 rounded-xl p-6 shadow">
          <legend className="text-lg font-semibold text-gray-700">
            Application Deadline
          </legend>
          <input type="date" name="deadline" className="input w-full mt-4" />
        </fieldset>

        {/* Salary Range */}
        <fieldset className="bg-base-200 border border-base-300 rounded-xl p-6 shadow">
          <legend className="text-lg font-semibold text-gray-700">
            Salary Range
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <div>
              <label className="label">Minimum Salary</label>
              <input
                type="text"
                name="min"
                className="input w-full"
                placeholder="Minimum Salary"
              />
            </div>

            <div>
              <label className="label">Maximum Salary</label>
              <input
                type="text"
                name="max"
                className="input w-full"
                placeholder="Maximum Salary"
              />
            </div>

            <div>
              <label className="label">Currency</label>
              <select
                defaultValue="Select a Currency"
                name="currency"
                className="select w-full"
              >
                <option disabled={true}>Select a Currency</option>
                <option>BDT</option>
                <option>USD</option>
                <option>EU</option>
              </select>
            </div>
          </div>
        </fieldset>

        {/* Job Description */}
        <fieldset className="bg-base-200 border border-base-300 rounded-xl p-6 shadow">
          <legend className="text-lg font-semibold text-gray-700">
            Job Description
          </legend>
          <textarea
            className="textarea w-full mt-4"
            name="description"
            placeholder="Job Description"
          ></textarea>
        </fieldset>

        {/* Job Requirements */}
        <fieldset className="bg-base-200 border border-base-300 rounded-xl p-6 shadow">
          <legend className="text-lg font-semibold text-gray-700">
            Job Requirements
          </legend>
          <textarea
            className="textarea w-full mt-4"
            name="requirements"
            placeholder="Requirements (separate by comma)"
          ></textarea>
        </fieldset>

        {/* Job Responsibilities */}
        <fieldset className="bg-base-200 border border-base-300 rounded-xl p-6 shadow">
          <legend className="text-lg font-semibold text-gray-700">
            Job Responsibilities
          </legend>
          <textarea
            className="textarea w-full mt-4"
            name="responsibilities"
            placeholder="Responsibilities (separate by comma)"
          ></textarea>
        </fieldset>

        {/* HR Info */}
        <fieldset className="bg-base-200 border border-base-300 rounded-xl p-6 shadow">
          <legend className="text-lg font-semibold text-gray-700">
            HR Related Info
          </legend>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="label">HR Name</label>
              <input
                type="text"
                name="hr_name"
                className="input w-full"
                placeholder="HR Name"
              />
            </div>
            <div>
              <label className="label">HR Email</label>
              <input
                type="email"
                name="hr_email"
                className="input w-full"
                defaultValue={user.email}
                placeholder="HR Email"
              />
            </div>
          </div>
        </fieldset>

        <div className="text-center">
          <input
            type="submit"
            className="btn btn-primary mt-4 px-8"
            value="Add Job"
          />
        </div>
      </form>
    </div>
  );
};

export default Addjob;
