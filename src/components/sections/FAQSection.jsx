import paddingImage from "../../../public/media/deepAI_Image-02.jpg";
import Accordion from "@/components/ui/Accordion";

const BannerImage = () => {
  return (
    <div className="h-[32rem] mx-auto">
      <div
        className="w-full h-[20rem] rounded-4xl bg-gray-100"
        style={{
          backgroundImage: `url(${paddingImage.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
    </div>
  );
};

const EventInfoContainer = ({ sectionTitle, faqItems, defaultOpenIndex }) => {
  return (
    <div className="container">
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2">
          <h2>{sectionTitle || "Frequently Asked Questions"}</h2>
        </div>
        <div className="w-full lg:w-1/2 mt-8">
          <Accordion
            items={faqItems}
            defaultIndex={defaultOpenIndex !== undefined ? defaultOpenIndex : 2}
          />
        </div>
      </div>
    </div>
  );
};

const FAQSection = ({
  sectionTitle = "",
  faqItems = [],
  defaultOpenIndex = 2,
}) => {
  return (
    <div className="mt-16 text-black w-full section-padding">
      <BannerImage />
      <EventInfoContainer
        sectionTitle={sectionTitle}
        faqItems={faqItems}
        defaultOpenIndex={defaultOpenIndex}
      />
    </div>
  );
};

export default FAQSection;
