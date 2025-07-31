import { useState } from 'react';
import { useParams, useLoaderData, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditJobPage = ({updateJobSubmit}) => {
  const job = useLoaderData();
  const [title, setTitle] = useState(job.title);
  const [type, setType] = useState(job.type);
  const [location, setLocation] = useState(job.location);
  const [salary, setSalary] = useState(job.salary);
  const [description, setDescription] = useState(job.description);
  const [companyName, setCompanyName] = useState(job.company.name);
  const [companyDescription, setCompanyDescribtion] = useState(
    job.company.description
  );
  const [companyEmail, setContactEmail] = useState(job.company.contactEmail);
  const [companyPhone, setContactPhone] = useState(job.company.contactPhone);
  const navigate = useNavigate();
  const { id } = useParams();

   const submitForm = (e) => {
     e.preventDefault();
 
     const updateJob = {
       id,
       title,
       type,
       location,
       description,
       salary,
       company: {
         name: companyName,
         description: companyDescription,
         companyEmail,
         companyPhone,
       },
     };
 
     updateJobSubmit(updateJob);
 
     toast.success('Job Updated Succefful');
 
     return navigate('/jobs/');
   };

  return (
    <>
      <section className="bg-blue-50 px-4 py-30">
        <div className="container mx-auto shadow-md bg-white rounded-lg max-w-2xl font-sans">
          <h2 className="text-3xl font-bold text-black my-6 text-center py-6">
            Update Job
          </h2>
          <form onSubmit={submitForm} className="max-w-xl mx-auto p-5">
            <label htmlFor="Job" className="font-bold mb-2">
              Job Type
            </label>
            <select
              id="Job"
              name="Job"
              className="w-full border border-gray-300 rounded-lg p-2 my-4"
              required
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="Remote">Remote</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
            </select>

            <label htmlFor="Jobs" className="font-bold mb-2">
              Job Listing Name
            </label>
            <input
              type="title"
              id="title"
              name="title"
              className="w-full border border-gray-300 rounded-lg p-2 my-4"
              placeholder="e.g. Software Developer in Lagos"
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <label htmlFor="Description" className="font-bold mb-2">
              Description
            </label>
            <textarea
              id="Description"
              name="Description"
              className="w-full border border-gray-300 rounded-lg p-2 my-4"
              rows="4"
              placeholder="Add duties, expectations, requirements, etc"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>

            <label htmlFor="Salary" className="font-bold pb-2">
              Salary
            </label>
            <select
              name="Salary"
              id="Salary"
              className="w-full border border-gray-300 rounded-lg p-2 my-4"
              required
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            >
              <option value="under-50k">Under $50k</option>
              <option value="50k-60k">$50k-$60k</option>
              <option value="60k-70k">$60k-$70k</option>
              <option value="70k-80k">$70k-$80k</option>
              <option value="80k-90k">$80k-$90k</option>
              <option value="90k-100k">$90k-$100k</option>
              <option value="100k-125k">$100k-$125k</option>
              <option value="125k-150k">$125k-$150k</option>
              <option value="150k-175k">$150k-$175k</option>
              <option value="175k-200k">$175k-$200k</option>
              <option value="200k+">Over $200k</option>
            </select>

            <label htmlFor="Location" className="font-bold mb-2">
              Location
            </label>
            <input
              type="text"
              id="Location"
              name="Location"
              className="w-full border border-gray-300 rounded-lg p-2 my-4"
              placeholder="Company Location"
              required
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />

            <div className="text-2xl font-semibold text-black py-5">
              Company Info
            </div>

            <label htmlFor="Company" className="font-bold mb-2">
              Company Name
            </label>
            <input
              type="text"
              id="Company"
              name="Company"
              className="w-full border border-gray-300 rounded-lg p-2 my-4"
              placeholder="Company Name"
              required
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />

            <label htmlFor="CompanyDescription" className="font-bold mb-2">
              Company Description
            </label>
            <textarea
              id="CompanyDescription"
              name="CompanyDescription"
              className="w-full border border-gray-300 rounded-lg p-2 mb-4"
              rows="4"
              placeholder="What does your company do?"
              required
              value={companyDescription}
              onChange={(e) => setCompanyDescribtion(e.target.value)}
            ></textarea>

            <label htmlFor="Email" className="font-bold mb-2">
              Company Email
            </label>
            <input
              type="email"
              id="Email"
              name="Email"
              className="w-full border border-gray-300 rounded-lg p-2 my-4"
              placeholder="Email address for applicants"
              required
              value={companyEmail}
              onChange={(e) => setContactEmail(e.target.value)}
            />

            <label htmlFor="Number" className="font-bold mb-2">
              Company Phone
            </label>
            <input
              type="number"
              id="Number"
              name="Phone"
              className="w-full border border-gray-300 rounded-lg p-2 my-4"
              placeholder="Optional phone for applicants"
              required
              value={companyPhone}
              onChange={(e) => setContactPhone(e.target.value)}
            />

            <div className="mt-6">
              <button
                type="submit"
                className="w-full bg-indigo-500 font-bold text-white text-center py-2 px-12 rounded-full hover:bg-indigo-700"
              >
                Add Job
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default EditJobPage;
