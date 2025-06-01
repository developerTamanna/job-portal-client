import { use } from 'react';
import { AuthContext } from '../contexts/AuthContexts/AuthContext';

const Register = () => {
  const { createUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    //createUser

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <div className="w-full max-w-md p-8 space-y-4 bg-white dark:bg-gray-900 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Create an Account
        </h2>
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Full Name */}
          <div>
            <label className="label">
              <span className="label-text dark:text-gray-200">Full Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Photo URL */}
          <div>
            <label className="label">
              <span className="label-text dark:text-gray-200">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your profile photo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text dark:text-gray-200">
                Email Address
              </span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text dark:text-gray-200">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter a password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="label">
              <span className="label-text dark:text-gray-200">
                Confirm Password
              </span>
            </label>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="btn btn-primary w-full">
              Register
            </button>
          </div>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Already have an account?{' '}
          <a href="/login" className="text-blue-600 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
