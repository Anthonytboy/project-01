import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaMapMarker } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify'

const JobPage = ({ deleteJob }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const job = useLoaderData();
  const onDeleteClick = (jobId) => {
    const confirm = window.confirm('Are you sure you want to delete this listing?')

    if (!confirm) return;

    deleteJob(jobId)

    toast.error('Job Deleted Succefully')


    navigate('/jobs')
  }

  //First useEffect
  /* useEffect(() => {
    const fetchJob = async () => {
     try {
        const res = await fetch(`/api/jobs/${id}`);
        const data = await res.json();
       console.log(data);
        setJob(data);
      } catch (error) {
        console.log('Error fetching dataa', error);
      } finally {
        setLoading(false);
      }
    }
    fetchJob();
  }, []) */

  return (
    <>
      <section>
        <div className="container m-auto py-6 px-6">
          <Link
            className="text-indigo-600 hover:text-indigo-500 flex items-center"
            to="/jobs"
          >
            {' '}
            <FaArrowLeft className="mr-2" /> Back to Job Listings
          </Link>
        </div>
      </section>

      <section className="bg-indigo-50 font-normal py-30">
        <div className="container mx-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 mx-auto gap-6 ">
            <main className="mx-auto max-w-7xl  md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-md text-center md:text-left">
                <div className="text-gray-500 mb-4">{job.type}</div>
                <h1 className="text-3xl font-bold mb-4">{job.title}</h1>
                <div className="text-gray-500 mb-3 flex align-middle justify-center md:justify-start">
                  <FaMapMarker className="text-orange-700 mr-1" />
                  {job.location}
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-indigo-600 text-lg font-bold mb-6">
                  Job Description
                </h3>
                <p className="mb-4 font-medium">{job.description}</p>
                <h3 className="text-indigo-600 text-lg font-bold mb-2">
                  Salary
                </h3>
                <p className="mb-4 font-bold">{job.salary}</p>
              </div>
            </main>
            <aside className="sm:max-w-xl mx-auto md:col-start-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-6">Company Info</h3>
                <h2 className="text-2xl">{job.company.name}</h2>
                <p className="my-2 font-medium">{job.company.description}.</p>

                <h3 className="text-xl">Contact Email:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactEmail}
                </p>
                <h3 className="text-xl">Contact Phone:</h3>
                <p className="my-2 bg-indigo-100 p-2 font-bold">
                  {job.company.contactPhone}
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md mt-6">
                <h3 className="text-xl font-bold mb-6">Manage Job</h3>
                <Link
                  className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                  to={`/edit-jobs/${job.id}`}
                >
                  Edit Job
                </Link>
                <button
                  onClick={ () => onDeleteClick(job.id)}
                  className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >
                  Delete Job
                </button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
};

const jobLoader = async ({ params }) => {
  const res = await fetch(`/api/jobs/${params.id}`);
  const data = await res.json();
  return data;
};

export { JobPage as default, jobLoader };
