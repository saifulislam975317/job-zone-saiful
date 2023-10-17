import image from "../../assets/images/image.jpg";
const Header = () => {
  return (
    <div className="lg:flex md:flex justify-center items-center flex-row-reverse">
      <div className="lg:w-1/2 w-full">
        <img className="rounded-xl " src={image} alt="" />
      </div>
      <div className="lg:w-1/2 w-full mx-12 lg:mx-24 space-y-4 mt-8 ">
        <h1 className="text-4xl font-bold">
          Building Your <br /> Bright Career Mission <br />
          <span className="text-purple-400">with Expertise</span>
        </h1>
        <p className="text-xl mr-4">
          our vision is to empower individuals and
          <br /> businesses through innovative software solutions.
          <br /> We strive to be the catalyst for digital transformation.
        </p>
        <button className="btn text-white bg-gradient-to-r  from-primary to-info ">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
