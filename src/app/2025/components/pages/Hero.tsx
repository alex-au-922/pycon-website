import Image from "next/image";
import { Itim } from "next/font/google";
const itim = Itim({ weight: ["400"], subsets: ["latin"] });

import CountdownTimer from "./CountdownTimer";

export default function Hero() {
  return (
    <main className="container mx-auto h-screen flex justify-center items-center">
      <section className="px-4 w-full flex flex-col lg:flex-row justify-between items-center">
        <aside className="w-full lg:w-1/2 text-center lg:text-start">
          <h1 className="text-6xl :text-7xl 2xl:text-8xl mb-5 text-gray-600">
            <small className="text-2xl xl:text-4xl font-bold text-gray-800">
              Pycon HK 2025 is
            </small>
            <br />
            <span className={itim.className}>Coming Soon</span>
          </h1>

          <CountdownTimer launchDate="2025-10-11T09:00:00" />

          {/* Conference Info */}
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
          <Image
            src="/icon.png"
            alt="Pycon Logo"
            width={250}
            height={250}
            className="w-36 sm:w-48 md:w-74 xl:w-full   max-w-[460px] h-auto opacity-70 mr-12 "
          />
        </aside>
      </section>
    </main>
  );
}
