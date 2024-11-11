import Clients from "./components/Clients/Clients";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="body-wrap">
      <Header />
      <main className="site-content">
        <Hero />
        <Clients />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}

export default App;
