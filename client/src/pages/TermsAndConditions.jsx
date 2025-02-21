import React from "react";
import Navbar from "../components/AllDrones/Navbar";
import Footer from "../components/Footer";

const TermsAndConditions = () => {
  return (
    <>
      <div className="relative min-h-screen p-4 bg-[#ddebf6]">
        <Navbar />
        <div className="flex justify-center items-center p-8">
          <h1 className="text-5xl font-bold text-[#1c4684]">
            {" "}
            Terms & Conditions{" "}
          </h1>
        </div>

        <div>
          <div className="flex flex-col px-20  justify-center py-2">
            <h1 className="text-2xl font-bold   ">1. Introduction</h1>
            <p className="text-xl text-gray-700">
              Welcome to the S.H.A.K.T.I Drone Tracking System ("Application").
              By accessing or using this application, you agree to comply with
              and be bound by the following terms and conditions. These terms
              govern your use of our services, including the tracking,
              monitoring, and management of drones, as well as user login
              functionalities provided on our platform. <br /> This application
              is restricted to company employees and authorized personnel only.
              Unauthorized access is strictly prohibited and may result in legal
              action. <br /> Please read these terms carefully before using our
              application. If you do not agree to these terms, you must not use
              our services.
            </p>
          </div>


          <div className="bg-white h-0.5"></div>


          <div className="flex flex-col px-20  justify-center py-2">
            <h1 className="text-2xl font-bold   ">2. Definitions</h1>
            <p className="text-xl text-gray-700">
              2.1 “Company” refers to Prym Aerospace (PAPL), the provider of the
              S.H.A.K.T.I Drone Tracking System.
            </p>
            <p className="text-xl text-gray-700">
              2.1 “Company” refers to Prym Aerospace (PAPL), the provider of the
              S2.2 “User” refers to any authorized employee or person accessing
              or using the application.
            </p>
            <p className="text-xl text-gray-700">
              2.3 “Application” refers to the S.H.A.K.T.I Drone Tracking System,
              including all associated software, services, and functionalities.
            </p>
            <p className="text-xl text-gray-700">
              2.4 “Drone” refers to any unmanned aerial vehicle (UAV) tracked or
              monitored using our application.
            </p>
          </div>


          <div className="bg-white h-0.5"></div>


          <div className="flex flex-col px-20  justify-center py-2">
            <h1 className="text-2xl font-bold   ">3. User Obligations</h1>
            <p className="text-xl text-gray-700">
              3.1 Compliance: Users must comply with all applicable laws and
              regulations governing the operation and tracking of drones,
              including privacy, airspace, and safety regulations.
            </p>
            <p className="text-xl text-gray-700">
              3.2 Account Responsibility: Users are responsible for maintaining
              the confidentiality of their account credentials and for all
              activities that occur under their account. Users must immediately
              notify the Company of any unauthorized use of their account.
            </p>
            <p className="text-xl text-gray-700">
              3.3 Accurate Information: Users must provide accurate and complete
              information when registering for and using the application. Any
              changes to this information must be promptly updated in the
              application.
            </p>
            <p className="text-xl text-gray-700">
              3.4 Usage Restrictions: Users must not:
              <ul className="list-disc ps-12">
                <li>Use the application for any unlawful purpose.</li>
                <li>Share access credentials with unauthorized individuals.</li>
                <li>
                  Interfere with or disrupt the functionality of the
                  application.
                </li>
                <li>
                  Attempt to gain unauthorized access to the application or its
                  related networks.
                </li>
                <li>Misuse drone tracking data for unauthorized purposes.</li>
              </ul>
            </p>
          </div>

          <div className="bg-white h-0.5"></div>


          <div className="flex flex-col px-20  justify-center py-2">
            <h1 className="text-2xl font-bold   ">
              4. Application Access and Availability
            </h1>
            <p className="text-xl text-gray-700">
              4.1 Access: Access to the application is restricted to company
              employees and authorized personnel only. The Company grants these
              users a limited, non-exclusive, non-transferable right to access
              and use the application for lawful purposes in accordance with
              these terms.
            </p>
            <p className="text-xl text-gray-700">
              4.2 Availability: The Company aims to provide continuous access to
              the application but does not guarantee that the application will
              be available at all times. The Company may suspend or limit access
              to the application without notice for maintenance, security
              threats, or other reasons beyond its control.
            </p>
          </div>

          <div className="bg-white h-0.5"></div>

          <div className="flex flex-col px-20  justify-center py-2">
            <h1 className="text-2xl font-bold   ">5. Drone Data and Privacy</h1>
            <p className="text-xl text-gray-700">
              5.1 Data Collection: The application collects and processes data
              related to drone operations, including real-time status, location,
              and performance metrics. By using the application, users consent
              to this data collection.
            </p>
            <p className="text-xl text-gray-700">
              5.2 Data Usage: The collected data may be used for operational
              purposes, performance analysis, and application improvement. The
              Company may also share aggregated data with third parties,
              provided it is anonymized and does not identify individual users
              or drones.
            </p>
            <p className="text-xl text-gray-700">
              5.3 Privacy Policy: The Company's use of personal data is governed
              by the Privacy Policy, which is incorporated into these terms by
              reference. Users should review the Privacy Policy to understand
              how their data is handled.
            </p>
          </div>

          <div className="bg-white h-0.5"></div>

          <div className="flex flex-col px-20  justify-center py-2">
            <h1 className="text-2xl font-bold   ">6. Intellectual Property</h1>
            <p className="text-xl text-gray-700">
              6.1 Ownership: All intellectual property rights in the
              application, including but not limited to software, design, logos,
              and trademarks, are owned by the Company or its licensors.
            </p>
            <p className="text-xl text-gray-700">
              6.2 User Content: Users retain ownership of any content they
              submit to the application. However, by submitting content, users
              grant the Company a worldwide, royalty-free, non-exclusive license
              to use, reproduce, modify, and distribute the content for
              operating and improving the application.
            </p>
          </div>

          <div className="bg-white h-0.5"></div>

          <div className="flex flex-col px-20  justify-center py-2">
            <h1 className="text-2xl font-bold   ">7. Security</h1>
            <p className="text-xl text-gray-700">
              7.1 Application Security: The Company implements security measures
              to protect the application and users' data. However, users
              acknowledge that no system is completely secure, and the Company
              cannot guarantee absolute security.
            </p>
            <p className="text-xl text-gray-700">
              7.2 User Responsibility: Users are responsible for maintaining the
              security of their accounts, using strong passwords, updating their
              login credentials regularly, and monitoring their accounts for any
              suspicious activity.
            </p>
          </div>

          <div className="bg-white h-0.5"></div>

          <div className="flex flex-col px-20  justify-center py-2">
            <h1 className="text-2xl font-bold   ">
              8. Limitations of Liability
            </h1>
            <p className="text-xl text-gray-700">
              8.1 No Warranty: The application is provided "as is" and "as
              available," without warranties of any kind, either express or
              implied. The Company does not warrant that the application will be
              error-free, uninterrupted, or free of harmful components.
            </p>
            <p className="text-xl text-gray-700">
              8.2 Limitation of Liability: The Company shall not be liable for
              any indirect, incidental, special, consequential, or punitive
              damages arising out of or related to the use of the application.
              In no event shall the Company's total liability exceed the amount
              paid by the user, if any, for accessing the application.
            </p>
          </div>

          <div className="bg-white h-0.5"></div>


          <div className="flex flex-col px-20  justify-center py-2">
            <h1 className="text-2xl font-bold   ">9. Termination</h1>
            <p className="text-xl text-gray-700">
              9.1 Termination by User: Users may terminate their account at any
              time by notifying the Company in writing.
            </p>
            <p className="text-xl text-gray-700">
              9.2 Termination by Company: The Company may suspend or terminate a
              user's access at its discretion, particularly in cases of breach
              of these terms.
            </p>
            <p className="text-xl text-gray-700">
              9.3 Effect of Termination: Upon termination, the user’s right to
              access the application will immediately cease, and all associated
              data may be deleted.
            </p>
          </div>

          <div className="bg-white h-0.5"></div>

          <div className="flex flex-col px-20  justify-center py-2">
            <h1 className="text-2xl font-bold   ">10. Governing Law</h1>
            <p className="text-xl text-gray-700">
              These terms and conditions are governed by and construed in
              accordance with the laws of [Jurisdiction]. Any disputes arising
              out of or in connection with these terms shall be subject to the
              exclusive jurisdiction of the courts of [Jurisdiction].
            </p>
          </div>

          <div className="bg-white h-0.5"></div>

          <div className="flex flex-col px-20  justify-center py-2">
            <h1 className="text-2xl font-bold   ">11. Changes to Terms</h1>
            <p className="text-xl text-gray-700">
              The Company reserves the right to update or modify these terms at
              any time. Users will be notified of any significant changes, and
              continued use of the application after changes have been made will
              constitute acceptance of the new terms.
            </p>
          </div>

          <div className="bg-white h-0.5"></div>    
        </div>
        <div className="flex flex-col px-20  justify-center items-center text-center py-10 ">
          <p className="text-xl text-gray-700">
            By using the S.H.A.K.T.I Drone Tracking System, you acknowledge that
            you have read, understood, and agreed to these terms and conditions.
            If you have any questions or concerns, please contact the Company
            for further clarification.
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default TermsAndConditions;
