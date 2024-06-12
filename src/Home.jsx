import Banner from "./components/Banner";

export default function Home() {
  return (
    <main className="home">
      <Banner url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
    </main>
  );
}
