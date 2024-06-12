import { useEffect } from "react";
import { useState } from "react";

export default function Banner({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        setLoading(false);
        console.log(data);
      }
    } catch (e) {
      setErrorMsg(e.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url !== "") fetchImages(url);
  }, [url]);

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured! {errorMsg}</div>;
  }

  const handlePrevious = () => {
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1);
  };
  const handleNext = () => {
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1);
  };
  return (
    <section className="banner">
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
