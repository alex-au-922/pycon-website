import Hero from "./components/pages/Hero";
import NavBar from "./components/utils/NavBar";
import Footer from "./components/utils/Footer";

export default function Home() {
  return (
    <main
      className="bg-cover bg-center min-h-screen "
      style={{ backgroundImage: "url('/pyhk-bg.jpg')" }}
    >
      <NavBar />
      <Hero />
      {/* <Footer /> */}
    </main>
  );
}
