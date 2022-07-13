import "./App.css";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Join from "./components/join/Join";
import Plan from "./components/plans/Plan";
import Program from "./components/programs/Program";
import Reason from "./components/reasons/Reason";
import Testimonial from "./components/testimonials/Testimonial";
function App() {
  return (
    <div className="App">
      <Hero />
      <Program />
      <Reason />
      <Plan />
      <Testimonial />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
