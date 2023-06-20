import HeroImg from "../../../assets/images/heroSection.jpg";
const HeroSection = () => {
  return (
    <div className="h-full my-5">
      <section className="flex items-center h-full">
        <div className="w-1/2 text-center">
          <h1 className="text-6xl font-bold py-4">
            Best way to grow your local business
          </h1>
          <p className="text-2xl text-slate-500 py-4">
            Artificial Intelligence powered easy-to-use tools to get more
            customers & give them a better experience
          </p>
          <div className="mt-5">
            <input
              type="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-9/12 p-2.5 outline-none"
              placeholder="ENTER YOUR EMAIL"
            />
            <button className="py-2 px-4 ml-2 bg-blue-600 rounded-lg text-white hover:bg-blue-800">
              GET DEMO
            </button>
          </div>
        </div>
        <div className="w-1/2">
          <img className="w-full" src={HeroImg} alt="" />
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
