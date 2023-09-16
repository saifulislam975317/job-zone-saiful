import { useLoaderData } from "react-router-dom";
import { addToDb } from "../../utilities/fakeDb";

const JobDetails = () => {
  const details = useLoaderData();

  const handleApply = (id) => {
    addToDb(id);
  };

  return (
    <div>
      <h1 className="md:text-center font-bold text-3xl mt-8 p-2">
        Job details
      </h1>
      <div className="grid md:grid-cols-[800px,300px] my-8 gap-4 ">
        <div className="px-4 overflow-auto">
          <p>
            <span className="text-lg font-bold ">Job Description:</span>
            {details.description}
          </p>
          <p>
            <span className="text-lg font-bold">Job Responsibility: </span>
            {details.responsibility}
          </p>
          <p>
            <span className="text-lg font-bold">Job Requirements: </span>
            {details.requirements}
          </p>
          <p>
            <span className="text-lg font-bold">Experiences: </span>
            {details.experiences}
          </p>
        </div>
        <div>
          <div className="bg-slate-300 opacity-100   p-8 rounded-lg md:h-1/2">
            <h1 className="border-b-2 border-black mt-4">Job details</h1>
            <div>
              <h1>Job Title: {details.jobTitle}</h1>
              <h2>Salary: {details.salary} (Per Month)</h2>
            </div>
            <div>
              <h1 className="border-b-2 border-black">Contact Information</h1>
              <p>Phone: {details.phone}</p>
              <p>Email: {details.email}</p>
              <p>Address: {details.address}</p>
            </div>
          </div>
          <button
            onClick={() => handleApply(details.id)}
            className="btn btn-info w-full mt-2"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
