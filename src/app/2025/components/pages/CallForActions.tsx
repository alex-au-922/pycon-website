import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { BsArrowRight } from "react-icons/bs";
import { MdCheck } from "react-icons/md";
import { HiOutlineCurrencyDollar } from "react-icons/hi";
import ActionCard from "../utils/ActionCards";
import Link from "next/link";

interface ImportantDates {
  title: string;
  date: string;
}

interface FAQ {
  question: string;
  answer: string;
}

const callForProposalsTypes = [
  "Talks (15-30 minutes)",
  "Workshops (1.5 hours)",
  "Posters and Lightning Talks",
];

const callForSponsorshipsBenefits = [
  "Booth space in the expo hall",
  "Logo placement on website and materials",
  "Sponsored Talks",
];

const importantDates: ImportantDates[] = [
  {
    title: "Proposal Deadline",
    date: "July 6, 2025",
  },
  {
    title: "Conference Date",
    date: "Oct 10, 2025",
  },
  {
    title: "Sprint Date",
    date: "Oct 11, 2025",
  },
];

const faqs: FAQ[] = [
  {
    question: "What types of proposals are you looking for?",
    answer:
      "We welcome proposals on all Python-related topics, including but not limited to web development, data science, machine learning, DevOps, testing, education, and community initiatives.",
  },
  {
    question: "What are the benefits of sponsoring?",
    answer:
      "Sponsors gain visibility within the Python community, opportunities to recruit talent, brand exposure, and demonstrate support for open source software.",
  },
  {
    question: "Is financial aid available for speakers?",
    answer:
      "Yes, PyCon offers financial assistance to speakers who need support with travel and accommodation. More details are available in the proposal submission process.",
  },
];

export default async function CallForActions() {
  return (
    <section
      id="call-for-actions"
      className="min-h-screen bg-gradient-to-b from-white to-blue-50 px-8"
    >
      {/* Hero Section */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-900 mb-6">
          Be Part of PyCon 2025
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Join the Python community and contribute to making PyCon 2025 an
          exceptional experience for everyone.
        </p>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto pb-20 px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 text-sm md:text-base max-w-144 lg:max-w-screen mx-auto">
          <ActionCard
            topColorClassName="bg-blue-600"
            Icon={
              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center mb-6">
                <HiOutlineLightBulb className="w-8 h-8 text-blue-600" />
              </div>
            }
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Call for Proposals
            </h2>
            <p className="text-gray-600 mb-8">
              Share your Python knowledge with the community. We're looking for
              talks, tutorials, and workshops on a wide range of Python-related
              topics, from beginner to advanced.
            </p>
            <ul className="space-y-3 text-gray-600 mb-8">
              {callForProposalsTypes.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-4 h-4 relative top-0.5">
                    <MdCheck className="text-blue-600 w-full h-full" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={process.env.NEXT_PUBLIC_CALL_FOR_PROPOSALS_URL}
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm md:text-base inline-flex items-center gap-2 justify-center px-6 py-3 border border-transparent font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
            >
              Submit a Proposal
              <span>
                <BsArrowRight className="text-xl" />
              </span>
            </Link>
          </ActionCard>

          <ActionCard
            topColorClassName="bg-yellow-500"
            Icon={
              <div className="h-16 w-16 rounded-full bg-yellow-100 flex items-center justify-center mb-6">
                <HiOutlineCurrencyDollar className="w-8 h-8 text-yellow-600 font-bold" />
              </div>
            }
          >
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
              Call for Sponsorships
            </h2>
            <p className="text-gray-600 mb-8">
              Support the Python community and gain visibility for your brand.
              PyCon offers various sponsorship tiers designed to maximize your
              organization's exposure.
            </p>
            <ul className="space-y-3 text-gray-600 mb-8">
              {callForSponsorshipsBenefits.map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-4 h-4 relative top-0.5">
                    <MdCheck className="text-yellow-500 w-full h-full" />
                  </div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href={process.env.NEXT_PUBLIC_CALL_FOR_SPONSORSHIPS_URL}
              rel="noopener noreferrer"
              target="_blank"
              className="text-sm md:text-base inline-flex items-center gap-2 justify-center px-6 py-3 border border-transparent font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"
            >
              Become a Sponsor
              <span>
                <BsArrowRight className="text-xl" />
              </span>
            </Link>
          </ActionCard>
        </div>

        {/* Important Dates */}
        <div className="mt-16 text-center">
          <div className="px-4 py-8 bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
              Key Dates
            </h3>
            <div className="flex flex-col lg:flex-row justify-center gap-6">
              {importantDates.map((date, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-10 p-4 rounded-lg flex-1 text-gray-600"
                >
                  <h4 className="font-semibold text-base md:text-lg">
                    {date.title}
                  </h4>
                  <p className="text-sm md:text-base">{date.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 text-gray-600">
          <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 text-center">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <summary className="font-semibold text-base md:text-lg cursor-pointer">
                  {faq.question}
                </summary>
                <p className="mt-3 text-sm md:text-base">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
