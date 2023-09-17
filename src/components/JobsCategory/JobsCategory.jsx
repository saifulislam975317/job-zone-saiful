import { Link } from "react-router-dom";
import useJobs from "../../hooks/useJobs";
import { BiDollarCircle } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";

const JobsCategory = () => {
  const [jobs] = useJobs();

  return (
    <div>
      <h1 className="lg:text-center text-start mt-12 font-bold font-sans text-2xl">
        Jobs Category
      </h1>
      <p className="mb-12 lg:text-center text-start">
        Discover diverse job opportunities in our company. Find your ideal job
        with ease at our jobzone website.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 my-12 gap-4 w-[1200px] mx-auto">
        {jobs?.map((job) => (
          <div
            key={job.id}
            className="card card-compact w-96 bg-base-100 shadow-xl"
          >
            <div>
              <img
                className="w-[100px] h-[80px] px-4 mt-4 "
                src={job.image}
                alt="jobs"
              />
            </div>
            <div className="card-body">
              <h2 className="card-title">{job.jobTitle}</h2>
              <p>{job.companyName}</p>
              <div className="flex justify-around items-center">
                <h3 className="border-purple-300 border-2 font-bold p-1 rounded-md w-[60px] text-center mr-4">
                  {job.type}
                </h3>
                <p>
                  <BiDollarCircle className="inline text-2xl" /> Salary:
                  {job.salary}
                </p>
              </div>
              <p>
                <ImLocation2 className="inline text-2xl" /> {job.address}
              </p>
              <Link
                to={`/details/${job.id}`}
                className="btn btn-sm btn-neutral w-1/3 text-xs"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsCategory;
