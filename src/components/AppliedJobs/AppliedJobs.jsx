import { useEffect, useState } from "react";
import { getApplyJobs } from "../../utilities/fakeDb";
import useJobs from "../../hooks/useJobs";
import "./css/applied.css";
import { Link } from "react-router-dom";
import { BiDollarCircle } from "react-icons/bi";
import { ImLocation2 } from "react-icons/im";

const AppliedJobs = () => {
  const [jobs] = useJobs();
  const [applied, setApplied] = useState([]);

  useEffect(() => {
    let appliedJobs = [];

    const storedJobs = getApplyJobs();
    for (const id in storedJobs) {
      const saveJobs = jobs?.find((job) => job.id === id);
      appliedJobs.push(saveJobs);
    }
    setApplied(appliedJobs);
  }, [jobs]);

  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-8">Applied Jobs</h1>
      <div className="flex flex-col justify-center items-center my-12 gap-4 ">
        {applied?.map((job) => (
          <div
            key={job?.id}
            className="card  border-2 border-slate-200 mb-4 p-4"
          >
            <div className="area">
              <div className="">
                <img className="w-[150px] " src={job?.image} alt="" />
              </div>
              <div className="space-y-1">
                <h1>{job?.jobTitle}</h1>
                <h2>{job?.companyName}</h2>
                <p>
                  <span className="border-purple-300 border-2 font-bold p-1 rounded-md w-[65px] mr-2">
                    {job?.type}
                  </span>
                  <BiDollarCircle className="inline text-2xl" />
                  Salary: {job?.salary}
                </p>
                <p>
                  <ImLocation2 className="text-2xl inline" /> {job?.address}
                </p>
              </div>
              <div>
                <Link to={`/details/${job?.id}`}>
                  <button className="btn btn-neutral ">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppliedJobs;
