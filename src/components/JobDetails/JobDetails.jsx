import { useLoaderData, useNavigate } from "react-router-dom";
import { addToDb } from "../../utilities/fakeDb";
import Swal from "sweetalert2";
import { BsFillTelephonePlusFill } from "react-icons/bs";
import { AiFillMail } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BiDollarCircle } from "react-icons/bi";
import { PiBagBold } from "react-icons/pi";

const JobDetails = () => {
  const details = useLoaderData();
  const navigate = useNavigate();
  const handleApply = (id) => {
    addToDb(id);
    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "apply done",
      showConfirmButton: false,
      timer: 1500,
    });

    navigate("/applied");
  };

  return (
    <div>
      <h1 className="md:text-center font-bold text-3xl mt-8 p-2">
        Job details
      </h1>
      <div className="grid md:grid-cols-[1000px,300px] my-8 gap-4 ">
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
            <h1 className="border-b-2 border-black mt-2">Job details</h1>
            <div>
              <h1>
                <PiBagBold className="text-2xl inline" /> Job Title:
                {details.jobTitle}
              </h1>
              <h2>
                <BiDollarCircle className="text-2xl inline" /> Salary:
                {details.salary} (Per Month)
              </h2>
            </div>
            <div>
              <h1 className="border-b-2 border-black">Contact Information</h1>
              <p>
                <BsFillTelephonePlusFill className="text-2xl inline mr-2" />
                Phone:
                {details.phone}
              </p>
              <p>
                <AiFillMail className="text-2xl mr-2 inline" /> Email:
                {details.email}
              </p>
              <p>
                <HiOutlineLocationMarker className="text-2xl inline mr-2" />
                Address: {details.address}
              </p>
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
