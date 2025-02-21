import React from "react";
import Navbar from "../components/AllDrones/Navbar";
import { VscEye } from "react-icons/vsc";
import { MdOutlineSatelliteAlt } from "react-icons/md";
import { GoBroadcast } from "react-icons/go";
import { RiRadarLine } from "react-icons/ri";
import { BsDatabaseAdd } from "react-icons/bs";
import { FaClockRotateLeft } from "react-icons/fa6";
import { HiOutlinePhone } from "react-icons/hi";
import { BsGlobe } from "react-icons/bs";
import { MdOutlineAttachEmail } from "react-icons/md";
import { TbTargetArrow } from "react-icons/tb";
import Footer from "../components/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="relative min-h-screen p-4 bg-[#ddebf6]">
        <Navbar />
        <div className="flex justify-center items-center p-8">
          <h1 className="text-5xl font-bold text-[#1c4684]">ABOUT US</h1>
        </div>
        <div className="flex flex-col px-20 text-center justify-center items-center">
          <h1 className="text-3xl font-black underline p-2 ">S.H.A.K.T.I</h1>
          <p className="text-xl text-gray-700">
            S.H.A.K.T.I (Safety High Accuracy Kinematic Tracking Integration) is
            an advanced drone tracking system engineered to revolutionize
            agricultural operations. It offers real-time monitoring of critical
            flight parameters such as pitch, roll, yaw, location, altitude, and
            temperature. Designed to withstand challenges in remote and
            low-connectivity regions, S.H.A.K.T.I ensures seamless data flow
            with flexible network support and offline data storage. By enabling
            precise drone tracking and operational efficiency, S.H.A.K.T.I
            empowers agricultural organizations to adopt smarter, data-driven
            farming practices.
          </p>
        </div>

        <div className="flex  px-20 ">
          <div className="flex items-center justify-center w-1/3">
            <img
              src="/prym_logo.png"
              alt=""
              height="300"
              width="300"
              className="shadow-img"
            />
          </div>
          <div className="flex flex-col items-center justify-center w-3/4">
            <h1 className="text-3xl font-black underline p-2">
              Powered by Prym Aerospace
            </h1>
            <p className="text-xl text-gray-700 text-center">
              Developed by Prym Aerospace Private Limited (PAPL), S.H.A.K.T.I is
              a testament to our commitment to revolutionizing agriculture with
              state-of-the-art drone technology. Our foundation in aerospace
              innovation fuels the development of reliable, high-performance
              drones tailored for the agricultural sector. Prym Aerospace
              focuses on creating solutions that simplify drone management,
              enhance operational safety, and increase agricultural
              productivity.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center px-40">
          <div>
            <h1 className="text-3xl font-black underline p-2 ">
              Our Vision and Mission
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-10 px-20 py-8">
            <div className="flex flex-col justify-center items-center px-20 py-4 shadow-md bg-white/30 text-center rounded-2xl">
              <VscEye fontSize={40} color="1c4684" />
              <h1 className="text-xl font-bold">Vision</h1>
              <p className="text-lg py-1">
                To lead the transformation of agriculture through intelligent
                drone technology, fostering precision, sustainability, and
                scalable growth.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center px-20 py-4 shadow-md bg-white/30 text-center rounded-2xl">
              <TbTargetArrow fontSize={40} color="1c4684" />
              <h1 className="text-xl font-bold"> Mission </h1>
              <p className="text-lg py-1">
                To deliver real-time drone tracking solutions that equip
                organizations with actionable insights, enabling optimized
                agricultural operations and sustainable farming practices.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 flex flex-col justify-center px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col justify-center ">
              <h1 className="text-3xl font-black underline p-4 text-center">
                OUR DRONES
              </h1>
              <h1 className="text-xl  p-2 text-center">
                Prym Aerospace’s drones, identified with unique IDs like
                PAPL-DRN-001-ALPHA, are designed for superior agricultural
                performance. Key drone specifications include:
              </h1>
              <ul className="pl-6 space-y-4 p-4">
                <li className="text-lg">
                  <strong>High-Precision Sensors</strong> for accurate flight
                  data.
                </li>
                <li className="text-lg">
                  <strong>50.4V Battery</strong> for extended operations.
                </li>
                <li className="text-lg">
                  <strong> Durability</strong> to withstand harsh conditions.
                </li>
                <li className="text-lg">
                  <strong> Remote Accessibility</strong> for seamless use in
                  remote areas.
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <img
                src="/droneimg.png"
                className="w-3/4 h-90 rounded-2xl shadow-md"
                alt="Drone Image"
              />
            </div>
          </div>
        </div>

        <div>
          <div>
            <h1 className="text-3xl font-black underline p-4 text-center">
              Core Features Of Shakti{" "}
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-10 px-20 py-8">
            <div className="flex flex-col justify-center items-center px-20 py-4 shadow-md bg-white/30 text-center rounded-2xl">
              <RiRadarLine fontSize={40} color="1c4684" />
              <h1 className="text-xl font-bold">Real-Time Tracking </h1>
              <p className="text-lg py-1">
                Continuous and accurate monitoring of drones' orientation
                (pitch, roll, yaw), GPS location, altitude, and environmental
                conditions (temperature, pressure).
              </p>
            </div>

            <div className="flex flex-col justify-center items-center px-20 py-4 shadow-md bg-white/30 text-center rounded-2xl">
              <GoBroadcast fontSize={40} color="1c4684" />
              <h1 className="text-xl font-bold">Flexible Data Transmission</h1>
              <p className="text-lg py-1">
                Seamless data transmission across 2G/3G/4G networks, ensuring
                uninterrupted monitoring even in remote agricultural zones.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center px-20 py-4 shadow-md bg-white/30 text-center rounded-2xl">
              <BsDatabaseAdd fontSize={40} color="1c4684" />
              <h1 className="text-xl font-bold"> Offline Data Storage</h1>
              <p className="text-lg py-1">
                Integrated MicroSD storage allows data retention during network
                disruptions, guaranteeing no data loss during operations.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center px-20 py-4 shadow-md bg-white/30 text-center rounded-2xl">
              <MdOutlineSatelliteAlt fontSize={40} color="1c4684" />
              <h1 className="text-xl font-bold">NavIC Satellite Integration</h1>
              <p className="text-lg py-1">
                Utilizes India’s NavIC satellite system for precise and reliable
                tracking within the Indian airspace, enhancing accuracy in drone
                navigation.
              </p>
            </div>

            <div className="flex flex-col justify-center items-center px-20 py-4 shadow-md bg-white/30 text-center rounded-2xl">
              <FaClockRotateLeft fontSize={40} color="1c4684" />
              <h1 className="text-xl font-bold"> 24/7 Operation</h1>
              <p className="text-lg py-1">
                Built for continuous drone monitoring and extended operational
                hours, ensuring long-term performance without downtime.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-20 py-6 text-center justify-center items-center">
          <h1 className="text-3xl font-black underline p-2 ">Meet Our Team</h1>
          <p className="text-xl text-gray-700">
            At Prym Aerospace, our strength lies in our dynamic team of
            engineers, innovators, and industry experts. Our dedicated
            professionals drive innovation, ensuring that S.H.A.K.T.I stays at
            the forefront of drone technology. We are passionate about creating
            impactful solutions that support the agricultural community and
            contribute to global food security.
          </p>
        </div>

        <div className="flex flex-col px-20 py-6 text-center justify-center items-center">
          <h1 className="text-3xl font-black underline p-2 ">
            Join Us in Shaping the Future of Agriculture
          </h1>
          <p className="text-xl text-gray-700">
            "Partner with Prym Aerospace and experience the future of
            agriculture with S.H.A.K.T.I."Explore how our cutting-edge drone
            technology can transform your farming operations with precision and
            efficiency
          </p>
          <div className="grid grid-cols-3 gap-10 p-4">
            <div className="flex justify-center items-center px-10 py-4 gap-6 shadow-md bg-white/30 text-center rounded-2xl">
              <HiOutlinePhone fontSize={40} color="1c4684" />
              <h1 className="text-xl "> <strong>Contact Us:</strong> 86000 58632 </h1>
            </div>
            <div className="flex justify-center items-center px-10 py-4 gap-6 shadow-md bg-white/30 text-center rounded-2xl">
              <BsGlobe  fontSize={40} color="1c4684" />
              <h1 className="text-xl "> <strong>Website: </strong>shaktibyprym.com </h1>
            </div>
            <div className="flex justify-center items-center px-10 py-4 gap-6 shadow-md bg-white/30 text-center rounded-2xl">
              <MdOutlineAttachEmail fontSize={40} color="1c4684" />
              <h1 className="text-xl "> <strong>Email: </strong> shakti@prymaerospace.com </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutUs;
