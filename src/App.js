import Become from "./components/Become";
import Footer from "./components/Footer";
import Goals1 from "./components/Goals1";
import Goals2 from "./components/Goals2";
import Goals3 from "./components/Goals3";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Perks from "./components/Perks";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Perks />
      <Goals1 />
      <Goals2 />
      <Goals3 />
      <Become />
      <Footer />
    </>
  );
}

export default App;
