const features = [
  {
    title: "Attract",
    description: "Attract more customers",
    featureList: [
      {
        title: "Reviews",
        description: "Improve ratings & get chosen more.",
      },
      {
        title: "Listing",
        description: "Improve listings & get seen more.",
      },
      {
        title: "Marketing",
        description: "Reach out to customers on text & email.",
      },
      {
        title: "Smart pages",
        description: "Engage more with our AI SEO.",
      },
    ],
  },
  {
    title: "Engage",
    description: "Convert leads to customers",
    featureList: [
      {
        title: "WebChat",
        description: "Convert leads on website chat with our AI..",
      },
      {
        title: "Messaging",
        description: "Engage with customers across all channels.",
      },
      {
        title: "Refferals",
        description: "Let your customers refer you.",
      },
      {
        title: "Modernize",
        description: "Modernize your integrated payment tools",
      },
    ],
  },
  {
    title: "Elevate",
    description: "Provide a delightful experience",
    featureList: [
      {
        title: "CaptainAI",
        description: "Your AI assistant to drive growth",
      },
      {
        title: "Feedback & Survey",
        description: "Listen to your customers & delight them",
      },
      {
        title: "Compettion & insights",
        description: "Learn about your competitors & insights.",
      },
      {
        title: "Customer Manager",
        description: "Manage all your customer data & activity.",
      },
    ],
  },
];
const Features = () => {
  return (
    <section className="py-10 my-10 bg-slate-100">
      <h2 className="text-4xl p-10 font-bold text-center">
        Revolutionize Your Business: Empowering Tools for Unleashing Next-Level
        Success!
      </h2>
      <div className="flex gap-4 items-center justify-evenly py-10 m-4 ">
        {features.map((feature) => (
          <div className="w-full text-center flex flex-col gap-4 bg-slate-50 drop-shadow-lg rounded-lg hover:drop-shadow-2xl cursor-pointer">
            <div className="w-full shadow-sm">
              <h3 className=" text-3xl font-semibold text-blue-600 p-5 ">
                {feature.title}
              </h3>
              <span className="text-2xl text-slate-500 m-2">
                {feature.description}
              </span>
            </div>
            <ul className="w-full">
              {feature.featureList.map((list) => (
                <li className="w-full p-5 shadow-sm  hover:text-white hover:bg-blue-400 ">
                  <a className="text-2xl font-semibold ">{list.title}</a>
                  <span className="block">{list.description}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
