const Contact = () => {
  return (
    <div className=" flex flex-col items-center  bg-blue-500 text-white p-10">
      <h2 className="text-5xl font-bold p-10">Ready to grow?</h2>
      <p className="p-5 text-2xl w-9/12 text-center">
        See why 100,000+ businesses trust us. Book a personalized demo to see
        how SalesCaptain provides you the right tools to grow your business.
      </p>
      <div className="w-full p-5">
        <input
          type="email"
          className="m-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-9/12 p-2.5 outline-none"
          placeholder="ENTER YOUR EMAIL"
        />
        <button className="py-2 px-4 ml-2 bg-indigo-800 rounded-lg text-white hover:bg-green-400">
          GET DEMO
        </button>
      </div>
      <span className="text-2xl">⭐⭐⭐⭐⭐ 5000+ Reviews</span>
    </div>
  );
};

export default Contact;
