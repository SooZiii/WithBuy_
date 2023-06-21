import React from "react";

function FeedCard({ image }) {
  return (
    <div className="embla__slide__img">
      <img src={`/carousel/${image}.jpg`} alt="Product" />
    </div>
  );
}

export default FeedCard;
