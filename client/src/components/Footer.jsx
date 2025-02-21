import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
   <>
    <section className="grid grid-cols-4 gap-6 px-10">
      <div className="flex flex-col p-4 text-center  items-center ">
        <img src="/prym_logo.png" alt="" />
        <p className="text-lg font-semibold">
          PRYM AEROSPACE (PAPL) is a leading innovator in agricultural drone
          technology , providing real-time drone traking and advanced analytics
          for optimized field management{" "}
        </p>
      </div>
      <div className="flex flex-col  items-start  ps-10 pt-10">
        <h1 className="text-2xl font-bold underline py-4">QUICK LINKS</h1>
        <ul>
           <li className="hover:underline text-lg py-1 ">
            {" "}
            <Link>Real Time Traking</Link>
          </li>
           <li className="hover:underline text-lg py-1 ">
            {" "}
            <Link>Drone Management</Link>
          </li>
           <li className="hover:underline text-lg py-1 ">
            {" "}
            <Link>Pilot Management</Link>
          </li>
           <li className="hover:underline text-lg py-1 ">
            {" "}
            <Link>Add Drones</Link>
          </li>
           <li className="hover:underline text-lg py-1 ">
            {" "}
            <Link>Analytics Dashboard</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col  items-start  ps-10 pt-10">
        <h1 className="text-2xl font-bold underline py-4">LEGAL LINKS</h1>
        <ul>
           <li className="hover:underline text-lg py-1 ">
            {" "}
            <Link>FAQ`s</Link>
          </li>
           <li className="hover:underline text-lg py-1 ">
            {" "}
            <Link>Terms and Conditions</Link>
          </li>
           <li className="hover:underline text-lg py-1 ">
            {" "}
            <Link>About Us</Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col  items-start  ps-10 pt-10">
        <h1 className="text-2xl font-bold underline py-4">CONTACT INFORMATION</h1>
        <ul>
           <li className="text-lg py-1 ">
            <p>
              <strong>HEAD OFFICE :</strong>
              PRYM Solutions Private Limited , Mittal Tower , C Wing , 104
              Nariman Point , Mumbai , Maharashtra , India
            </p>
          </li>
           <li className="text-lg py-1 ">
            <p>
              <strong>CONTACT : </strong>
              +91 22 3512 0758{" "}
            </p>
          </li>
           <li className="text-lg py-1 ">
            <p>
              <strong>Email : </strong>
              info@prym.in
            </p>
          </li>
        </ul>
      </div>
    </section>
    <div className="h-2 bg-[#ddebf6]"></div>
    <div className="flex justify-center items-center p-4">
        <h1 className="text-lg font-bold">
        © 2025 Prym Aerospace Pvt. Ltd. All Rights Reserved
        </h1>
    </div>
    </>
  );
};

export default Footer;
