import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const JobsCategory = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div className="grid lg:grid-cols-3 my-12 gap-4 w-[1200px] mx-auto">
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
              <p>Salary: {job.salary}</p>
            </div>
            <p>{job.address}</p>
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
  );
};

export default JobsCategory;
