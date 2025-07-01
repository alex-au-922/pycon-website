import React from "react";

export default function CodeOfConduct() {
  return (
    <div className="bg-gradient-to-br from-blue-700 via-blue-500 to-blue-300 -mt-20">
      <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="bg-white bg-opacity-90 rounded-xl shadow-xl p-8 md:p-12 relative mt-20">
          <h1 className="font-bold text-4xl md:text-5xl mb-8 text-gray-800 text-center">Code of Conduct</h1>
          <div className="space-y-6 text-gray-700 mt-4">
            <p>
              PyCon Hong Kong is a community conference intended for networking and collaboration in the developer
              community.
            </p>
            <p>
              We value the participation of each member of the Python community and want all attendees to have an
              enjoyable and fulfilling experience. Accordingly, all attendees are expected to show respect and courtesy
              to other attendees throughout the conference and at all conference events, whether officially sponsored by
              the PyCon Hong Kong organisers or not.
            </p>
            <p>
              To make clear what is expected, all staff, attendees, speakers, exhibitors, organizers, and volunteers at
              any PyCon event are required to conform to the following Code of Conduct. Organizers will enforce this
              code throughout the event.
            </p>
            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">Our Standards</h2>
            <p>
              PyCon is dedicated to providing a positive conference experience for everyone, regardless of age, gender
              identity and expression, sexual orientation, disability, physical appearance, body size, ethnicity,
              nationality, race, or religion (or lack thereof), education, or socio-economic status.
            </p>
            <p>Examples of behavior that contributes to creating a positive environment include:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Being kind to others</li>
              <li>Behaving professionally</li>
              <li>Using welcoming and inclusive language</li>
              <li>Being respectful of differing viewpoints and experiences</li>
              <li>Gracefully accepting constructive criticism</li>
              <li>Focusing on what is best for the community</li>
              <li>Showing empathy towards other community members</li>
            </ul>
            <p>Examples of unacceptable behavior by participants include:</p>
            <ul className="list-disc ml-6 space-y-1">
              <li>Harassment of conference participants in any form</li>
              <li>Deliberate intimidation, stalking, or following</li>
              <li>Violent threats or language directed against another person</li>
              <li>Sexual language and imagery in any conference venue, including talks</li>
              <li>Insults or put downs</li>
              <li>Sexist, racist, homophobic, transphobic, ableist, or exclusionary jokes</li>
              <li>Excessive swearing</li>
              <li>Unwelcome sexual attention or advances</li>
              <li>Unwelcome physical contact</li>
              <li>Sustained disruption of talks or other events</li>
              <li>
                Other conduct that is inappropriate for a professional audience including people of many different
                backgrounds
              </li>
            </ul>
            <p>Participants asked to stop any inappropriate behavior are expected to comply immediately.</p>
            <p>
              If a participant engages in behavior that violates this code of conduct, the conference organizers may
              take any action they deem appropriate, including warning the offender or expulsion from the conference
              with no refund.
            </p>
            <p>Thank you for helping make this a welcoming, friendly event for all.</p>
            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">Weapons Policy</h2>
            <p>
              No weapons are allowed at conference venues, including but not limited to explosives (including
              fireworks), guns, and large knives such as those used for hunting or display, as well as any other item
              used for the purpose of causing injury or harm to others. Anyone seen in possession of one of these items
              will be asked to leave immediately, and will only be allowed to return without the weapon.
            </p>
            <p>Attendees are further expected to comply with all state and local laws on this matter.</p>
            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">Scope</h2>
            <p>
              All PyCon Hong Kong attendees are subject to the Code of Conduct. This includes PyCon Hong Kong staff and
              volunteers, as well as attendees of the tutorials, workshops, summits, poster sessions, receptions,
              conference, sprints, and sponsored or unofficial events.
            </p>
            <p>
              Exhibitors in the expo hall, sponsor or vendor booths, or similar activities are also subject to the Code
              of Conduct. In particular, exhibitors should not use sexualized images, activities, or other material.
              Booth staff (including volunteers) should not use sexualized clothing/uniforms/costumes, or otherwise
              create a sexualized environment.
            </p>
            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">Contact Information</h2>
            <p>
              If you believe that someone is violating the code of conduct during a PyCon event, or have any other
              concerns, please contact a member of the event staff immediately.
            </p>
            <p>
              PyCon Hong Kong
              <br />
              Email:{" "}
              <a href="mailto:pycon@pycon.hk" className="text-blue-700 underline">
                pycon@pycon.hk
              </a>
            </p>
            <p>In case of a conflict of interest, you can individually contact:</p>
            <p>
              Conference Chair of PyCon HK 2025
              <br />
              Mr. Henry Law
            </p>
            <p>
              Conference staff will be happy to help participants contact hotel/venue security or local law enforcement,
              provide escorts, or otherwise assist any attendee to feel safe for the duration of the conference. We
              value your attendance.
            </p>
            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">Procedure for Handling Incidents</h2>
            <p>
              <a href="/2025/code-of-conduct/procedures-for-reporting-incidents" className="text-blue-700 underline">
                Procedures for Reporting Incidents
              </a>
            </p>
            <p>
              <a href="/2025/code-of-conduct/enforcement-procedures" className="text-blue-700 underline">
                Enforcement Procedures
              </a>
            </p>
            <h2 className="text-2xl font-bold text-blue-600 mt-8 mb-4">License</h2>
            <p>
              This Code of Conduct was forked from PyCon US from the{" "}
              <a
                href="https://github.com/python/pycon-code-of-conduct"
                target="_blank"
                className="text-blue-700 underline"
              >
                <b>Python GitHub</b>
              </a>
              .
            </p>
            <p>
              The PyCon Code of Conduct is licensed under a{" "}
              <a href="http://creativecommons.org/licenses/by/3.0/" target="_blank" className="text-blue-700 underline">
                <b>Creative Commons Attribution 3.0 Unported License</b>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
