import { useEffect, useState } from "react";
import { getApplyJobs } from "../../utilities/fakeDb";
import useJobs from "../../hooks/useJobs";
import "./css/applied.css";
import { Link } from "react-router-dom";

const AppliedJobs = () => {
  const [jobs] = useJobs();
  const [applied, setApplied] = useState([]);
  console.log("applied jobs", applied);

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
    <div className="flex flex-col justify-center items-center my-12 gap-4 ">
      {applied?.map((job) => (
        <div key={job?.id} className="card w-3/4 border-2 border-slate-200 p-4">
          <div className="area">
            <div className="">
              <img className="w-[150px] " src={job?.image} alt="" />
            </div>
            <div className="space-y-1">
              <h1>{job?.jobTitle}</h1>
              <h2>{job?.companyName}</h2>
              <p>
                <span className="border-2 text-lg border-purple-200 rounded-md p-1 mr-2">
                  {job?.type}
                </span>
                Salary: {job?.salary}
              </p>
              <p>{job?.address}</p>
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
  );
};

export default AppliedJobs;
