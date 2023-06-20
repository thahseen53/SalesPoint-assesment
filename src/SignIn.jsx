import SignImg from "./assets/images/signIn.jpg";

const SignIn = () => {
  return (
    <div className="flex items-center w-full h-screen">
      <div className="w-1/2 flex flex-col items-center gap-6 drop-shadow-lg">
        <h3 className="text-3xl font-semibold">Sales Captain</h3>
        <input
          type="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-9/12 p-2.5 outline-none"
          placeholder="ENTER YOUR EMAIL"
        />{" "}
        <input
          type="password"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  w-9/12 p-2.5 outline-none"
          placeholder="ENTER YOUR EMAIL"
        />
        <button className="py-2 px-9 ml-2 bg-blue-600 rounded-lg text-white hover:bg-blue-800">
          login
        </button>
        <span>Forget Password ?</span>
      </div>
      <div className="w-1/2 bg-url h-screen  bg-cover ">
        <div className="h-full w-full bg-gray-200 rounded-md bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-10 border border-gray-100">
          <h1 className="text-5xl font-bold  text-center p-10">
            Give your business a SalesCaptain Upgrade
          </h1>
          <p className="w-4/6 m-auto text-center txt-2xl p-5">
            Our AI-powered tools help local businesses modernize how they
            communicate with their customers by facilitating online reviews,
            personalized marketing campaigns, web chats, payments, and more. To
            learn more, talk to an expert today.
          </p>
          <div className="w-full text-center">
            <button className="px-9 py-4 text-white bg-yellow-400 rounded-lg text-center m-5 mx-auto">
              BOOK AN APPOINTMENT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
