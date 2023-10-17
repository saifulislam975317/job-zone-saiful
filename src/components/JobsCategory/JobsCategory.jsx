import { Link } from "react-router-dom";
import useJobs from "../../hooks/useJobs";
import { BiDollarCircle } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";
import { useEffect, useState } from "react";

const JobsCategory = () => {
  const [jobs] = useJobs();
  const [dataToDisplay, setDataToDisplay] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    if (showAll) {
      setDataToDisplay(jobs);
    } else {
      setDataToDisplay(jobs.slice(0, 3));
    }
  }, [jobs, showAll]);

  return (
    <div>
      <div className="text-center">
        <h1 className="font-bold font-sans text-2xl">Jobs Category</h1>
        <p className="px-2">
          Discover diverse job opportunities in our company. Find your ideal job
          with ease at our jobzone website.
        </p>
      </div>

      <div className="grid grid-cols-1 p-12 lg:grid-cols-3 md:grid-cols-2 mt-12 gap-4">
        {dataToDisplay?.map((job) => (
          <div
            key={job.id}
            className="card card-compact w-96 bg-base-100  shadow-xl"
          >
            <div>
              <img
                className="w-[100px] h-[80px] px-4 mt-4 "
                src={job.image}
                alt="jobs"
              />
            </div>
            <div className="card-body ">
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
      <div className="flex justify-center items-center mb-12  ">
        <button
          className="btn btn-warning"
          onClick={() => setShowAll(!showAll)}
        >
          {showAll ? "Show Less" : "Show All"}
        </button>
      </div>
    </div>
  );
};

export default JobsCategory;
