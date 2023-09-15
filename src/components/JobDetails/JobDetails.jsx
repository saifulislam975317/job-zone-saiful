import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const details = useLoaderData();

  return (
    <div>
      <h1>This is job details</h1>
      <h1>details {details.id}</h1>
    </div>
  );
};

export default JobDetails;
