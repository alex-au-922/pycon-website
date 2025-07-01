import React from "react";
import { Itim } from "next/font/google";

const itim = Itim({ weight: ["400"], subsets: ["latin"] });

export default function PrivacyNotice() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-90 rounded-xl shadow-xl p-8 md:p-12">
          <h1
            className={`${itim.className} text-4xl md:text-5xl mb-8 text-gray-800 text-center`}
          >
            Privacy Notice
          </h1>

          <div className="space-y-8 text-gray-700">
            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Introduction
              </h2>
              <p className="mb-4">
                PyCon HK respects your privacy and is committed to protecting
                your personal data. This privacy notice will inform you about
                how we look after your personal data when you visit our website
                and tell you about your privacy rights and how the law protects
                you.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Information We Collect
              </h2>
              <p className="mb-3">
                We may collect the following types of information:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>
                  <span className="font-semibold">
                    Personal identification information
                  </span>
                  : Name, email address, phone number, and professional
                  information when you register for our events or newsletter.
                </li>
                <li>
                  <span className="font-semibold">Technical data</span>: IP
                  address, browser type and version, time zone setting, browser
                  plug-in types and versions, operating system and platform.
                </li>
                <li>
                  <span className="font-semibold">Usage data</span>: Information
                  about how you use our website and services.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                How We Use Your Information
              </h2>
              <p className="mb-3">
                We use your data for the following purposes:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>
                  To gather analysis or valuable information to improve our
                  services
                </li>
                <li>To process payments and refunds</li>
                <li>
                  To communicate with you about events, opportunities, and
                  updates
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Cookie Policy
              </h2>
              <p className="mb-4">
                We use cookies to ensure you get the best experience on our
                website. Cookies are small text files stored on your device that
                help analyze web traffic and customize your experience. You can
                control cookies through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Your Rights
              </h2>
              <p className="mb-3">
                Under data protection laws, you have the following rights:
              </p>
              <ul className="list-disc ml-6 space-y-2">
                <li>Access to your personal data</li>
                <li>Correction of your personal data</li>
                <li>Erasure of your personal data</li>
                <li>Object to processing of your personal data</li>
                <li>Restriction of processing your personal data</li>
                <li>Transfer of your personal data</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions about this privacy notice or our data
                practices, please contact us at:
              </p>
              <div className="bg-blue-100 p-4 rounded-lg inline-block">
                <p className="font-semibold">Email: privacy@pycon.hk</p>
                <p className="font-semibold">Address: PyCon HK, Hong Kong</p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Changes to This Privacy Notice
              </h2>
              <p className="mb-4">
                We may update our Privacy Notice from time to time. We will
                notify you of any changes by posting the new Privacy Notice on
                this page and updating the "Last Updated" date.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last Updated: May 15, 2024
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
