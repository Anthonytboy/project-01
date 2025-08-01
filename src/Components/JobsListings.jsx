import JobCard from './JobCard';
import { useState, useEffect } from 'react';
import Spinner from './Spinner';

const API_URL = 'https://react-web-jobs.onrender.com/jobs';

const JobsListings = ({ isHome = false }) => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJObs = async () => {
      const apiUrl = isHome ? `${API_URL}?_limit=3` : `${API_URL}`;

      try {
        const res = await fetch(apiUrl);
         const data = await res.json();

       
        setJobs(data);
      } catch (error) {
        console.log('Error fetching dataa', error);
      } finally {
        setLoading(false);
      }
    };

    fetchJObs();
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container mx-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Recent Jobs' : 'Browers Jobs'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {jobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default JobsListings;
