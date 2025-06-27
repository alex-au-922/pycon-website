import Hero from "./components/pages/Hero";
import NavBar from "./components/utils/NavBar";
import Footer from "./components/utils/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Footer />
    </main>
  );
}
