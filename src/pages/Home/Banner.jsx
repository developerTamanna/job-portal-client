import { motion } from 'motion/react';

const Banner = () => {
  return (
    <div className="bg-white py-10">
      <div className="max-w-7xl mx-auto px-4 flex flex-col-reverse md:flex-row items-center gap-8">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left">
          <motion.h1
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Latest Jobs For You
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="text-lg text-gray-600"
          >
            Find your dream job or hire the best candidates—easy and fast!
          </motion.p>
        </div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://i.postimg.cc/5NtcGrp0/job-candidate-resumes-circling-around-a-computer-screen-3-D-illustration-scaled.jpg"
            alt="Job Portal Banner"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
