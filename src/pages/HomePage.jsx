import Hero from '../Components/Hero'
import HomeCards from '../Components/HomeCards';
import JobListings from '../Components/JobsListings';
import ViewAllJobs from '../Components/ViewaAllJobs'

const HomePage = () => {
  return (
    <>
      <Hero />
      <HomeCards />
      <JobListings isHome={true} />
      <ViewAllJobs />

    </>
  )
}

export default HomePage