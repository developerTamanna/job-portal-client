import { use } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContexts/AuthContext';
import SocialLogin from './Shared/SocialLogin';

const Login = () => {
  const { sinInUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state || '/';
  console.log('location in sign in page', location);
  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    //createUser
    sinInUser(email, password)
      .then((result) => {
        console.log(result);
        navigate(from);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-base-200 px-4">
      <div className="w-full max-w-md p-8 space-y-4 bg-white dark:bg-gray-900 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 dark:text-white">
          Login to Your Account
        </h2>
        <form onSubmit={handleLogin} className="space-y-4">
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
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button type="submit" className="btn btn-primary w-full">
              Login
            </button>
          </div>
        </form>

        <SocialLogin from={from}></SocialLogin>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400">
          Don’t have an account?{' '}
          <a href="/register" className="text-blue-600 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
