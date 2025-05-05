import { useState } from "react";
import { Plus } from "lucide-react";

const AccordionItem = ({ title, content, isActive, onClick }) => {
  return (
    <li className="w-full overflow-hidden">
      <div
        className={`w-full transition-colors border-t bg-gradient-to-r bg-bottom bg-no-repeat border-t-neutral-15 border-opacity-40 ${
          isActive
            ? "from-coral-500 via-violet-500 to-blue-500 bg-[length:100%_2px] border-t"
            : "bg-[length:100%_2px]"
        }`}
      >
        <button
          className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent py-4 text-left"
          onClick={onClick}
          aria-expanded={isActive}
        >
          <h5
            className={`text-lg lg:text-2xl font-medium transition-300 flex-1 text-neutral-15 transition-opacity ${
              isActive ? "opacity-100" : "opacity-40"
            }`}
          >
            <span>{title}</span>
          </h5>
          <Plus
            className="ml-2"
            size={16}
            style={{
              transform: isActive ? "rotate(45deg)" : "rotate(0deg)",
              transition: "transform 0.2s ease-in-out",
            }}
          />
        </button>
        <div
          className="overflow-hidden transition-all duration-700 ease-in-out"
          style={{ maxHeight: isActive ? "300px" : "0px" }}
        >
          <div className="w-full py-4 text-neutral-15">
            <div className="portable-text-breaks">
              <p className="text-xs lg:text-base font-body">{content}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

const Accordion = ({ items, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="opacity-100 animate-fadeIn">
      <ul className="w-full h-[50rem]">
        {items.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isActive={index === activeIndex}
            onClick={() => setActiveIndex(index === activeIndex ? -1 : index)}
          />
        ))}
      </ul>
    </div>
  );
};

export default Accordion;
