import HondaLogo from "../../../assets/images/honda-png-logo.png";
import DentalLogo from "../../../assets/images/dental.jpg";
import gymLogo from "../../../assets/images/gym.jpg";
import RestaurantLogo from "../../../assets/images/restaurant.jpg";
import WoodlandLogo from "../../../assets/images/woodland-logo.png";

const Logo = ({ source }) => {
  return (
    <div className="w-28 drop-shadow-lg">
      <img className="w-full" src={source} alt="logo" />
    </div>
  );
};

const PartnerShip = () => {
  return (
    <section className="mt-12 py-5 text-center">
      <h2 className="text-5xl font-bold py-8 mb-8">
        Trusted by Over{" "}
        <span className="text-blue-500 font-extrabold">100,000+</span> Local
        Businesses Globally
      </h2>
      <div className="flex justify-around my-5 mx-13 items-center">
        <Logo source={HondaLogo} />
        <Logo source={DentalLogo} />
        <Logo source={gymLogo} />
        <Logo source={RestaurantLogo} />
        <Logo source={WoodlandLogo} />
      </div>
    </section>
  );
};

export default PartnerShip;
