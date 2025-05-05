import LocalFilePlayer from "../LocalFilePlayer";
import rightBottomImage from "../../../public/media/javitsCenter.jpg";
import leftBottomImage from "../../../public/media/deepAI_Image-01.jpg";
import AnimatedLinkButton from "../ui/AnimatedLinkButton";
import ScrollDownAnimation from "../ui/ScrollDownAnimation";
import LandingButton from "../ui/LandingButton";

const LandingSection = ({
  mainHeading = "",
  eventDate = "",
  eventLocation = "",
  secondaryHeading = "",
  description = "",
  buttonText = "",
  learnMoreText = "",
}) => {
  return (
    <div className="text-black w-full flex flex-col h-[225vh] relative">
      <div className="w-full h-[100vh] absolute z-10 overflow-hidden rounded-b-4xl">
        <div className="h-full aspect-video">
          <LocalFilePlayer />
          <div className="w-full flex bottom-0 absolute flex-col lg:flex-row section-padding">
            <div className="bg-slate-100/40 lg:m-[3rem] rounded-3xl backdrop-blur-2xl shadow-2xl p-8 flex flex-col gap-8 w-full lg:w-1/2">
              <div className="flex flex-col gap-8">
                <h1>{mainHeading}</h1>
                <div>
                  <p className="text-3xl font-medium text-slate-600">
                    {eventDate}
                  </p>
                  <p className="text-3xl font-medium text-slate-600">
                    {eventLocation}
                  </p>
                </div>
                <LandingButton label={buttonText} />
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex items-end justify-center pb-10">
              <ScrollDownAnimation />
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sticky top-0 h-[100vh] flex gap-6 section-padding">
        <div className="w-full md:w-1/2 flex flex-col aspect-square gap-6">
          <div
            className="w-full bg-purple-100 h-2/5 rounded-3xl overflow-hidden p-8 shadow-xl"
            style={{
              backgroundImage: `url(${leftBottomImage.src})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div></div>
          </div>
          <div className="w-full bg-neutral-300 h-3/5 rounded-3xl overflow-hidden p-8 lg:p-12 shadow-lg flex flex-col justify-between">
            <div className="flex flex-col gap-4">
              <h2>{secondaryHeading}</h2>
              <p className="text-xl tracking-tight text-slate-800">
                {description}
              </p>
            </div>
            <AnimatedLinkButton label={learnMoreText} />
          </div>
        </div>
        <div
          className="w-1/2 rounded-3xl p-8 bg-cover bg-center shadow-lg hidden md:block"
          style={{
            backgroundImage: `url(${rightBottomImage.src})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        />
      </div>
    </div>
  );
};

export default LandingSection;
