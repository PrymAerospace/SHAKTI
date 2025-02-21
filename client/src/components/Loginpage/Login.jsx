// import React, { useState } from "react";
// import { LuEye, LuEyeClosed } from "react-icons/lu";
// import { FaBuildingUser, FaUser } from "react-icons/fa6";
// import { RiLockPasswordFill } from "react-icons/ri";
// import PrymLogo from "../logos/PrymLogo";
// import ShaktiLogo from "../logos/ShaktiLogo";
// import { useNavigate } from "react-router-dom";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Login = () => {
//   const navigate = useNavigate();
//   const [orgCode, setOrgCode] = useState("");
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [passwordVisible, setPasswordVisible] = useState(false);

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://192.168.31.68:9000/api/auth/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ username, password, orgCode }),
//       });
//       const data = await response.json();

//       if (response.ok) {
//         localStorage.setItem("token", data.token);
//         navigate("/dashboard");
//         toast.success("Login successful!");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       console.error("Login failed", error);
//       toast.error("Login failed. Please try again.");
//     }
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Left Side: Background Image */}
//      <div className="w-full md:w-1/2 flex justify-center items-center  bg-[#f3f4f6]">
//         <div className="flex flex-col rounded-xl p-8 sm:p-12 w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[40vw] bg-white/70 shadow-lg">
//           <div className="flex flex-col items-center">
//             <PrymLogo className="w-24 h-24 mb-4" />
//             <ShaktiLogo className="w-32 h-32 mb-6" />
//             <p className="text-lg sm:text-xl md:text-2xl text-center py-2 text-gray-700 font-bold">
//               SAFETY HIGH ACCURACY AERIAL KINEMATIC TRACKING INTEGRATION
//             </p>
//           </div>
//           <form onSubmit={handleLogin} className="flex flex-col py-6 sm:py-10 px-4 sm:px-10 gap-4">
//             {/* Organization Code */}
//             <div className="flex gap-2 items-center text-xl sm:text-base font-bold">
//               <FaBuildingUser className="text-[#1c4684]" />
//               <label className="text-2xl text-[#1c4684]" htmlFor="org_code">
//                 Organisational Code:
//               </label>
//             </div>
//             <div className="flex justify-between items-center border-b-2 border-[#a09e9e] p-2 hover:border-[#1c4684] transition-all duration-300">
//               <input
//                 type="text"
//                 placeholder="Enter Organisation Code"
//                 className="bg-transparent border-none focus:outline-none focus:ring-0 w-full placeholder-gray-500 font-bold"
//                 value={orgCode}
//                 onChange={(e) => setOrgCode(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
//               />
//             </div>

//             {/* Username */}
//             <div className="flex gap-2 items-center text-xl sm:text-base font-bold">
//               <FaUser className="text-[#1c4684]" />
//               <label className="text-2xl text-[#1c4684]" htmlFor="username">
//                 Username:
//               </label>
//             </div>
//             <div className="flex justify-between items-center border-b-2 border-[#a09e9e] p-2 hover:border-[#1c4684] transition-all duration-300">
//               <input
//                 type="text"
//                 placeholder="Enter your username"
//                 className="bg-transparent border-none focus:outline-none focus:ring-0 w-full placeholder-gray-500 font-bold"
//                 value={username}
//                 onChange={(e) => setUsername(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
//                 autoComplete="username"
//               />
//             </div>

//             {/* Password */}
//             <div className="flex gap-2 items-center text-xl sm:text-base font-bold">
//               <RiLockPasswordFill className="text-[#1c4684]" />
//               <label className="text-2xl text-[#1c4684]" htmlFor="password">
//                 Password:
//               </label>
//             </div>
//             <div className="flex justify-between items-center border-b-2 border-[#a09e9e] p-2 hover:border-[#1c4684] transition-all duration-300">
//               <input
//                 type={passwordVisible ? "text" : "password"}
//                 placeholder="Enter your password"
//                 className="bg-transparent border-none focus:outline-none focus:ring-0 w-full placeholder-gray-500 font-bold"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
//                 autoComplete="current-password"
//               />
//               <button
//                 onClick={togglePasswordVisibility}
//                 className="text-xl text-gray-500 hover:text-[#1c4684] focus:outline-none transition-all duration-300"
//                 aria-label={passwordVisible ? "hide password" : "show password"}
//                 type="button"
//               >
//                 {passwordVisible ? <LuEye /> : <LuEyeClosed />}
//               </button>
//             </div>

//             {/* Login Button */}
//             <div className="flex justify-center mt-8">
//               <button
//                 type="submit"
//                 className="px-16 sm:px-20 py-3 bg-[#2bb0d4] rounded-xl text-white text-lg sm:text-xl md:text-2xl hover:rounded-4xl font-extrabold transition-all duration-300 hover:shadow-lg"
//               >
//                 Login
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>

//       {/* Right Side: Login Form */}
//       <div className="hidden md:block md:w-1/2 h-full bg-cover bg-center" style={{ backgroundImage: "url('/logimg.webp')" }}></div> 
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
  import { LuEye, LuEyeClosed } from "react-icons/lu";
  import { FaBuildingUser, FaUser } from "react-icons/fa6";
  import { RiLockPasswordFill } from "react-icons/ri";
  import PrymLogo from "../logos/PrymLogo";
  import ShaktiLogo from "../logos/ShaktiLogo";
  import { useNavigate } from "react-router-dom";
  import { toast } from "react-toastify";
  import "react-toastify/dist/ReactToastify.css";

  const Login = () => {
    const navigate = useNavigate();

    // State variables
    const [orgCode, setOrgCode] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
      setPasswordVisible(!passwordVisible);
    };

    const handleLogin = async (e) => {
      e.preventDefault(); // Prevent default form submission
      try {
        const response = await fetch("http://192.168.31.68:9000/api/auth/login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ username, password, orgCode }),
        });
        const data = await response.json();

        if (response.ok) {
          localStorage.setItem("token", data.token);
          navigate("/dashboard");
          toast.success("Login successful!");
        } else {
          toast.error(data.message);
        }
      } catch (error) {
        console.error("Login failed", error);
        toast.error("Login failed. Please try again.");
      }
    };

    return (
      <div
        className="flex justify-center items-center min-h-screen relative"
      >

        {/* Background image with blur effect */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: "url('/logimg2.jpeg')",
        filter: "blur(5px)",
      }}
    ></div>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-opacity-50"></div>

        <div className="relative flex flex-col rounded-xl p-8 sm:p-12 w-full max-w-[90vw] sm:max-w-[70vw] md:max-w-[50vw] lg:max-w-[40vw] bg-white/50 glassshadow ">
          <div className="flex flex-col items-center">
            <PrymLogo className="w-24 h-24 mb-4" />
            <ShaktiLogo className="w-32 h-32 mb-6" />
            <p className="text-lg sm:text-xl md:text-2xl text-center py-2 text-gray-700 font-bold">
              SAFETY HIGH ACCURACY AERIAL KINEMATIC TRACKING INTEGRATION
            </p>
          </div>
          <form onSubmit={handleLogin} className="flex flex-col py-6 sm:py-10 px-4 sm:px-10 gap-4">
            {/* Organization Code */}
            <div className="flex gap-2 items-center text-xl sm:text-base font-bold">
              <FaBuildingUser className="text-[#1c4684]" />
              <label className="text-2xl text-[#1c4684]" htmlFor="org_code">
                Organisational Code:
              </label>
            </div>
            <div className="flex justify-between items-center border-b-2 border-[#a09e9e] p-2 hover:border-[#1c4684] hover:bg-[#1c4684]/20 transition-all duration-300">
              <input
                type="text"
                placeholder="Enter Organisation Code"
                className="bg-transparent border-none focus:outline-none focus:ring-0 w-full placeholder-gray-500 font-bold"
                value={orgCode}
                onChange={(e) => setOrgCode(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
              />
            </div>

            {/* Username */}
            <div className="flex gap-2 items-center text-xl sm:text-base font-bold">
              <FaUser className="text-[#1c4684]" />
              <label className="text-2xl text-[#1c4684]" htmlFor="username">
                Username:
              </label>
            </div>
            <div className="flex justify-between items-center border-b-2 border-[#a09e9e] p-2 hover:border-[#1c4684] hover:bg-[#1c4684]/20 transition-all duration-300">
              <input
                type="text"
                placeholder="Enter your username"
                className="bg-transparent border-none focus:outline-none focus:ring-0 w-full placeholder-gray-500 font-bold"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
                autoComplete="username"
              />
            </div>

            {/* Password */}
            <div className="flex gap-2 items-center text-xl sm:text-base font-bold">
              <RiLockPasswordFill className="text-[#1c4684]" />
              <label className="text-2xl text-[#1c4684]" htmlFor="password">
                Password:
              </label>
            </div>
            <div className="flex justify-between items-center border-b-2 border-[#a09e9e] p-2 hover:border-[#1c4684] hover:bg-[#1c4684]/20 transition-all duration-300">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Enter your password"
                className="bg-transparent border-none focus:outline-none focus:ring-0 w-full placeholder-gray-500 font-bold"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleLogin(e)}
                autoComplete="current-password"
              />
              <button
                onClick={togglePasswordVisibility}
                className="text-xl text-gray-900 hover:text-[#1c4684] focus:outline-none transition-all duration-300"
                aria-label={passwordVisible ? "hide password" : "show password"}
                type="button"
              >
                {passwordVisible ? <LuEye /> : <LuEyeClosed />}
              </button>
            </div>

            {/* Login Button */}
            <div className="flex justify-center mt-8">
              <button
                type="submit"
                className="px-16 sm:px-20 py-3 bg-[#1c4684] rounded-xl text-white text-lg sm:text-xl md:text-2xl hover:rounded-4xl font-extrabold transition-all duration-300 hover:shadow-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  export default Login;
