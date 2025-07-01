import { Itim } from "next/font/google";
import CountdownTimer from "./CountdownTimer";
import BannerImageSlide from "./BannerImageSlide";
import Image from "next/image";

const itim = Itim({ weight: ["400"], subsets: ["latin"] });

interface HeroBackgroundProps {
  children: React.ReactNode;
  className?: string;
}

function HeroBackground({ children, className = "" }: HeroBackgroundProps) {
  return (
    <div
      className={`relative min-w-full min-h-full bg-gradient-to-br from-cyan-400 via-green-300 to-yellow-300 overflow-hidden ${className}`}
    >
      {/* <Image
        src="/background.png"
        alt="Background"
        fill
        priority
        className="object-cover z-0"
        quality={100}
        sizes="100vw"
        style={{
          objectPosition: "center",
        }}
      /> */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="w-full h-screen -mt-20">
      <HeroBackground className="w-full h-full">
        <div className="flex space-x-8 w-full h-full items-center container mx-auto">
          <aside className="w-full lg:w-1/2 text-center lg:text-start">
            <h1 className="text-5xl xl:text-6xl mb-5 text-gray-600">
              <small className="text-4xl xl:text-5xl font-bold text-gray-800 opacity-90 transition-all duration-200">
                PyCon HK 2025 is
              </small>
              <br />
              <span className={itim.className}>Coming Soon</span>
            </h1>

            <CountdownTimer launchDate="2025-10-11T09:00:00" />

            <div className="border-3 border-white text-gray-700 rounded shadow-md px-4 py-3 my-5 inline-block text-left mt-8 w-full max-w-xs sm:max-w-md md:max-w-lg">
              <div className="font-bold text-md xl:text-xl mb-1">Date:</div>
              <div className="font-semibold text-base xl:text-lg">
                October 11, 2025 (Conference Day)
              </div>
              <div className="font-semibold text-base xl:text-lg">
                October 12, 2025 (Sprint)
              </div>
              <div className="font-bold text-base xl:text-lg mt-3 mb-1">
                Venue:
              </div>
              <div className="font-semibold text-base xl:text-lg">
                City University of Hong Kong, Kowloon Tong, HK
              </div>
            </div>
          </aside>
          <aside className="w-full lg:w-1/2 flex justify-center mt-5 lg:mt-0 lg:pl-4">
            <BannerImageSlide />
          </aside>
        </div>
      </HeroBackground>
    </section>
  );
}
