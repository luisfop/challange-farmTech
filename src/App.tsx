import BaseLayout from "./components/BaseLayout/BaseLayout";
import Description from "./components/BaseLayout/Description/Description";
import Header from "./components/BaseLayout/Header/Header";


function App() {
  return (
    <>
      <Header />
      <section>
        <Description />
      </section>
      <BaseLayout />
    </>
  );
}

export default App;
