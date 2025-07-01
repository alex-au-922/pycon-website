import "@/styles/globals.css";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ weight: ["500", "600"], subsets: ["latin"] });

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={`${montserrat.className} min-h-screen flex flex-col text-gray-600`}
    >
      <main className="flex-grow">{children}</main>
    </div>
  );
}
