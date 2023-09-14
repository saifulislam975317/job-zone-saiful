import AvailableJobs from "../AvailableJobs/AvailableJobs";
import Header from "../Header/Header";
import JobsCategory from "../JobsCategory/JobsCategory";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <AvailableJobs></AvailableJobs>
      <JobsCategory></JobsCategory>
    </div>
  );
};

export default Home;
