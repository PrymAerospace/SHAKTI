import React from "react";
import { VscCopilot } from "react-icons/vsc";
import { TbDroneOff } from "react-icons/tb";
import { PiFarmFill } from "react-icons/pi";
import { useNavigate } from "react-router-dom";
import { IoArrowBackCircle} from "react-icons/io5";

const OtherData = () => {
  const navigate = useNavigate();

  const goback = () => {
    navigate(-1);
  };


  return (
    <div className="flex gap-4 items-center">
      <div className="flex items-center gap-2  font-bold text-xl bg-[#eff1e4] rounded-2xl pe-3 shadow-md "><div className="bg-white rounded-2xl  p-2"><VscCopilot size={40} /></div> Shyam Jadhav </div>
      <div className="flex items-center gap-2  font-bold text-xl bg-[#eff1e4] rounded-2xl pe-3 shadow-md "><div className="bg-white rounded-2xl  p-2"><TbDroneOff size={40} /></div>  6 Crash </div>
      <div className="flex items-center gap-2  font-bold text-xl bg-[#eff1e4] rounded-2xl pe-3 shadow-md "><div className="bg-white rounded-2xl  p-2"><PiFarmFill size={40} /></div>  11 Acre </div>
      <div className="flex items-center justify-center  font-bold text-xl bg-[#eff1e4] rounded-2xl  shadow-md "><div className="rounded-2xl  p-2"> 
      <IoArrowBackCircle
            onClick={goback}
            fontSize={40}
            color="black"
            text-white
          />
           </div> </div>

      
    </div>
  );
};

export default OtherData;
