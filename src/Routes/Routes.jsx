import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import JobDetails from "../components/JobDetails/JobDetails";
import AppliedJobs from "../components/AppliedJobs/AppliedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/applied",
        element: <AppliedJobs></AppliedJobs>,
      },

      {
        path: "/details/:id",
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => {
          const id = params.id;
          return fetch("/jobs.json") // Fetch the JSON file
            .then((response) => response.json())
            .then((data) => {
              // Find the job with the matching ID
              const job = data.find((job) => job.id === parseInt(id));
              if (!job) {
                throw new Error("Job not found");
              }
              return job;
            });
        },
      },
    ],
  },
]);

export default router;
