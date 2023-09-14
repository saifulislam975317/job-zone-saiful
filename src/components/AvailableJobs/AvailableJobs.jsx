import { FaReact, FaPhp, FaLaravel } from "react-icons/fa";
import { TbBrandJavascript } from "react-icons/tb";
const AvailableJobs = () => {
  return (
    <div className=" my-8">
      <h1 className="text-center font-bold font-sans text-2xl">
        Available Jobs
      </h1>
      <p className="mb-12 text-center">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="lg:flex  justify-center items-center gap-8">
        <div className="card w-64 bg-gray-100 shadow-xl">
          <div className="card-body flex flex-col justify-center items-center">
            <span>
              <FaReact className="text-5xl text-purple-400"></FaReact>
            </span>
            <h1 className="font-bold text-xl font-sans">React Developer</h1>
            <h3>Available jobs: 50+</h3>
          </div>
        </div>
        <div className="card w-64 bg-gray-100 shadow-xl">
          <div className="card-body flex flex-col justify-center items-center">
            <span>
              <FaPhp className="text-5xl text-purple-400"></FaPhp>
            </span>
            <h1 className="font-bold text-xl font-sans">PHP Developer</h1>
            <h3>Available jobs: 45</h3>
          </div>
        </div>
        <div className="card w-64 bg-gray-100 shadow-xl">
          <div className="card-body flex flex-col justify-center items-center">
            <span>
              <FaLaravel className="text-5xl text-purple-400"></FaLaravel>
            </span>
            <h1 className="font-bold text-xl font-sans">Laravel Developer</h1>
            <h3>Available jobs: 30+</h3>
          </div>
        </div>
        <div className="card w-64 bg-gray-100 shadow-xl">
          <div className="card-body flex flex-col justify-center items-center">
            <span>
              <TbBrandJavascript className="text-5xl text-purple-300"></TbBrandJavascript>
            </span>
            <h1 className="font-bold text-lg font-sans">
              Javascript Developer
            </h1>
            <h3>Available jobs: 20</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailableJobs;
