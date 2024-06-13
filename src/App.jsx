import Header from "./components/Header";
import Home from "./Home";

function App() {
  return (
    <>
      <Header />
      <Home url={"https://picsum.photos/v2/list"} page={"1"} limit={"10"} />
    </>
  );
}

export default App;
