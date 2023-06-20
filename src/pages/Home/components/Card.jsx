const Card = ({ imgSrc, heading, description, imgOrder }) => {
  return (
    <div className="flex w-full  items-center justify-around rounded-lg py-10">
      <div className={`${imgOrder} drop-shadow-lg hover:drop-shadow-2xl`}>
        <img className="w-80" src={imgSrc} alt={heading} />
      </div>
      <div>
        <h1 className="text-4xl font-semibold">{heading}</h1>
        <p className="text-1xl text-slate-600 w-80  m-auto">{description}</p>
      </div>
    </div>
  );
};

export default Card;
