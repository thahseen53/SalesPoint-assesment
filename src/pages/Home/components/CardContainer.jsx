import SocialMedia from "../../../assets/images/social-media.webp";
import WebChat from "../../../assets/images/webchat.webp";
import Marketing from "../../../assets/images/marketing.webp";
import CustomerService from "../../../assets/images/trainaing-and-support.webp";
import Card from "./Card";

const CardContainer = () => {
  return (
    <>
      <Card
        imgSrc={SocialMedia}
        heading="Get discovered by
more customers"
        description="Higher reviews & better listings make
you more discoverable to people
organically"
        imgOrder="order-0"
      />
      <Card
        imgSrc={WebChat}
        heading="Get discovered by
            more customers"
        description="Higher reviews & better listings make
            you more discoverable to people
            organically"
        imgOrder="order-last"
      />
      <Card
        imgSrc={Marketing}
        heading="Get discovered by
      more customers"
        description="Higher reviews & better listings make
      you more discoverable to people
      organically"
        imgOrder="order-0"
      />
      <Card
        imgSrc={CustomerService}
        heading="Get discovered by
      more customers"
        description="Higher reviews & better listings make
      you more discoverable to people
      organically"
        imgOrder="order-last"
      />
    </>
  );
};

export default CardContainer;
