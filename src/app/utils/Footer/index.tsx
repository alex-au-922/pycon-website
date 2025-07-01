import React from "react";
import Link from "next/link";
import SocialMediaIcons from "../SocialMediaIcons";
import ToC from "./ToC";

export default function Footer() {
  const historyYears = [
    "2024",
    "2023",
    "2022",
    "2021",
    "2020 fall",
    "2020 spring",
    "2018",
    "2017",
    "2016",
    "2015",
  ];

  const replaceYearWithLink = (year: string) => {
    return year.replace(/\s/g, "-").toLowerCase();
  };

  return (
    <footer className="w-full bg-gray-800 text-white">
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <SocialMediaIcons
              spacing="space-x-6"
              iconColor="text-white"
              iconHoverColor="hover:text-gray-400"
              iconExtraClassName="text-xl transition-colors duration-300"
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">History</h3>
            <div className="flex flex-wrap gap-4">
              {historyYears.map((year, index) => (
                <Link
                  key={index}
                  href={`/${replaceYearWithLink(year)}`}
                  className="hover:text-blue-400 transition-colors duration-300 whitespace-nowrap"
                >
                  {year}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Central dividing line with diminishing width */}
      <div className="mx-auto px-4">
        <div className="h-px my-2 mx-auto max-w-full [background:linear-gradient(to_right,rgba(75,85,99,0),rgba(75,85,99,1)_30%,rgba(75,85,99,1)_70%,rgba(75,85,99,0)_100%)]"></div>
      </div>

      <ToC />
    </footer>
  );
}
