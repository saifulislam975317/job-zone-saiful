import image from "../../assets/images/image.jpg";
const Header = () => {
  return (
    <div className="md:flex lg:flex-row-reverse justify-center items-center gap-x-12  md:mt-8">
      <div>
        <img
          className="w-1/3  md:w-full rounded-lg shadow-2xl"
          src={image}
          alt=""
        />
      </div>
      <div className="p-4  space-y-2">
        <h1 className="text-3xl font-sans font-bold">
          Building Your <br /> Bright Career Mission <br />
          <span className="text-purple-400">with Expertise</span>
        </h1>
        <p className="text-sm">
          our vision is to empower individuals and
          <br /> businesses through innovative software solutions.
          <br /> We strive to be the catalyst for digital transformation.
        </p>
        <button className="btn text-white bg-gradient-to-r  from-primary to-info">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Header;
