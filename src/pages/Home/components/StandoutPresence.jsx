import CardContainer from "./CardContainer";

const StandoutPresence = () => {
  return (
    <section className="w-full py-10 mt-10">
      <h2 className="p-5 text-5xl  font-bold text-center mb-5">
        Make your business stand out with us
      </h2>
      <div className="flex flex-col gap-5 rounded-lg">
        <CardContainer />
      </div>
    </section>
  );
};

export default StandoutPresence;
