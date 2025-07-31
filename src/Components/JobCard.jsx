import { useState } from 'react';
import { FaMapMarker } from 'react-icons/fa'
import { Link } from 'react-router-dom'
  
const JobCard = ({ job }) => {
  const [showMore, setShowMore] = useState(false);

   if (!job || !job.description) {
    return null; // or show a placeholder/loading state
  }

  let description = job.description;
  if (!showMore) {
    description = job.description.substring(0, 70) + '...';
  } 

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <h4 className="text-sm font-semibold text-gray-600">{job.type}</h4>
        <div className="border-b border-gray-200 my-2"></div>
        <h3 className="text-xl font-bold">{job.title}</h3>
        <p className="text-sm text-gray-700 mt-2">{description}</p>
        <button
          onClick={() => setShowMore((prevState) => !prevState)}
          className="text-indigo-500 text-sm mt-2 underline hover:no-underline hove:text-indigo-600"
        >
          {showMore ? 'Less' : 'More'}
        </button>

        <p className="text-indigo-500 hover:text-indigo-400 font-bold mt-2">
          {job.salary}
        </p>
        <div className="flex justify-between items-center mt-4">
          <div className="text-orange-600 text-sm flex items-center gap-1">
            {/* <svg
              className="inline text-lg mb-1 mr-1"
              viewBox="0 0 384 512"
              height="1em"
              width="1em"
              fill="currentColor"
            >
              <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192C0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67c-9.535 13.774-29.93 13.773-39.464 0z"></path>
            </svg> */}
            <FaMapMarker className='inline text-lg mr-1' />
            {job.location}
          </div>
          <Link
            to={`/jobs/${job.id}`}
            className="h-[36px] bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-md text-sm"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
