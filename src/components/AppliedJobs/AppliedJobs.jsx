import { useEffect, useState } from "react";
import { getApplyJobs } from "../../utilities/fakeDb";
import useJobs from "../../hooks/useJobs";

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

  return <div></div>;
};

export default AppliedJobs;
