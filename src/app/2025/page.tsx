import Hero from "./components/pages/Hero";
import NavBar from "./components/utils/NavBar";
import Footer from "./components/utils/Footer";

export default function Home() {
  return (
    <main
      className="bg-cover bg-center min-h-screen w-full "
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "120% 120%", // Increase to zoom in
        backgroundPosition: "center",
      }}
    >
      <NavBar />
      <Hero />
      <Footer />
    </main>
  );
}
