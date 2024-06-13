import { useEffect, useState } from "react";
import About from "./components/About";
import Banner from "./components/Banner";
import Services from "./components/Services";

export default function Home({ url, page = 1, limit = 5 }) {
  const [images, setImages] = useState([]);
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
  return (
    <main className="home">
      <Banner images={images} />
      <About images={images} />
      <Services images={images} />
    </main>
  );
}
