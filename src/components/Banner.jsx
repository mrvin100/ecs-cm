import { useState } from "react";

export default function Banner({ images }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <section className="banner container">
      <div className="slide_container">
        <i className="bx bx-left-arrow-alt icon" onClick={handlePrevious}></i>
        {images && images.length
          ? images.map((image, index) => (
              <img
                key={image.id}
                src={image.download_url}
                alt={image.download_url}
                className={
                  currentSlide === index
                    ? "current_image"
                    : "current_image hide_current_image"
                }
              />
            ))
          : null}
        <i className="bx bx-right-arrow-alt icon" onClick={handleNext}></i>
        <div className="circle_indicators">
          {images && images.length
            ? images.map((_, index) => (
                <button
                  key={index}
                  className={
                    currentSlide == index
                      ? "current_indicator"
                      : "current_indicator inactive_indicator"
                  }
                  onClick={() => setCurrentSlide(index)}
                ></button>
              ))
            : null}
        </div>
      </div>
    </section>
  );
}
