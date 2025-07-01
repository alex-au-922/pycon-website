import React from "react";
import {
  Introduction,
  InformationWeCollect,
  HowDoWeUseThePersonalInformationWeCollect,
  WhoDoWeShareYourPersonalInformationWith,
  UseOfThirdPartyServices,
  Cookies,
  Hyperlinks,
  YourDataPrivacyRights,
} from "./components/PrivatePolicySections";

export default async function PrivacyPolicy() {
  return (
    <div className="bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 -mt-20 text-gray-600 text-sm md:text-base">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-90 rounded-xl shadow-xl p-8 md:p-12 relative mt-20">
          <h1 className="font-bold text-2xl md:text-5xl mb-8 text-gray-800 text-center">
            PyCon Hong Kong Privacy Policy Statement
          </h1>
          <div className="mt-4">
            <Introduction />
          </div>

          <div className="space-y-8 text-gray-700 mt-8">
            <InformationWeCollect />
            <HowDoWeUseThePersonalInformationWeCollect />
            <WhoDoWeShareYourPersonalInformationWith />
            <UseOfThirdPartyServices />
            <Cookies />
            <Hyperlinks />
            <YourDataPrivacyRights />
          </div>
        </div>
      </div>
    </div>
  );
}
