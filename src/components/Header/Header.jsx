import image from "../../assets/images/image.jpg";
const Header = () => {
  return (
    <div className="hero bg-gray-100">
      <div className="hero-content flex-col p-24 lg:flex-row-reverse">
        <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
        <div className="mr-24">
          <h1 className="text-4xl font-sans font-bold">
            Building Your <br /> Bright Career Mission <br />
            <span className="text-purple-400">with Expertise</span>
          </h1>
          <p className="py-6">
            our vision is to empower individuals and businesses <br />
            through innovative software solutions. We strive to be the catalyst
            <br />
            for digital transformation, enabling success, growth,
            <br />
            and excellence in the ever-evolving technological landscape.
          </p>
          <button className="btn text-white bg-gradient-to-r  from-primary to-info">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
