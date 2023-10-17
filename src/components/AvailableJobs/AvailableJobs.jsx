import { FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
const AvailableJobs = () => {
  return (
    <div className=" my-24">
      <div className="text-center">
        <h1 className="font-bold font-sans text-2xl">Available Jobs</h1>
        <p className="px-2">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
      </div>
      <div className="lg:flex justify-evenly items-center px-24 mt-8">
        <div className="card w-72 bg-base-100 shadow-xl ">
          <div className="card-body items-center">
            <span>
              <FaReact className="text-5xl text-purple-400"></FaReact>
            </span>
            <h2 className="card-title font-bold">React Developer</h2>
            <p>Available jobs: 50+</p>
          </div>
        </div>
        <div className="card my-4 w-72 bg-base-100 shadow-xl">
          <div className="card-body items-center">
            <span>
              <FaPhp className="text-5xl text-purple-400"></FaPhp>
            </span>
            <h2 className="card-title font-bold">PHP Developer</h2>
            <p>Available jobs: 45</p>
          </div>
        </div>
        <div className="card w-72 bg-base-100 shadow-xl">
          <div className="card-body items-center">
            <span>
              <FaLaravel className="text-5xl text-purple-400"></FaLaravel>
            </span>
            <h2 className="card-title font-bold">Laravel Developer</h2>
            <p>Available jobs: 65+</p>
          </div>
        </div>
        <div className="card my-4 w-72 bg-base-100 shadow-xl">
          <div className="card-body items-center">
            <span>
              <TbBrandJavascript className="text-5xl text-purple-300"></TbBrandJavascript>
            </span>
            <h2 className="card-title font-bold">Javascript Developer</h2>
            <p>Available jobs: 40</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableJobs;
