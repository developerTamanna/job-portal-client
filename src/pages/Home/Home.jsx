import { Suspense } from 'react';

import Banner from './Banner';
import HotJobs from './HotJobs';

const Home = () => {
  const jobsPromise = fetch('http://localhost:3000/jobs').then((res) =>
    res.json()
  );
  return (
    <div>
      <Banner></Banner>
      <div>
        <Suspense fallback={'loading hot jobs'}>
          <HotJobs jobsPromise={jobsPromise}></HotJobs>
        </Suspense>
      </div>
    </div>
  );
};

export default Home;
