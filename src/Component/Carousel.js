import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import FeedCard from "./FeedCard";

const options = {};
const SLIDE_COUNT = 3;
const slides = Array.from(Array(SLIDE_COUNT).keys());

const EmblaCarousel = () => {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__slide__number">
                <span>{index + 1}</span>
              </div>
              <FeedCard image={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmblaCarousel;
