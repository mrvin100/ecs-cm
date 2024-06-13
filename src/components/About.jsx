export default function About({ images }) {
  console.log(images);
  return (
    <section className="about container">
      <h1 className="heading">about us</h1>
      {images && images.length > 0 ? (
        <div className="box_container">
          <div className="content">
            <h2 className="heading">{images[0].author}</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repellendus cum perspiciatis obcaecati atque consequatur
              consectetur accusantium
              <br />
              <br />
              rerum maxime perspiciatis! Qui, itaque harum inventore magnam
              quisquam.
            </p>
            <button className="btn">Get Started Free</button>
          </div>
          <div className="image">
            <img src={images[0].download_url} alt={images[0].author} />
          </div>
        </div>
      ) : null}
    </section>
  );
}
