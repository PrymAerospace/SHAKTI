import React from "react";
import Navbar from "../components/AllDrones/Navbar";
import MainContent from "../components/AllDrones/MainContent";

const AllDrones = () => {
  return (
    <section className="p-4 bg-[#ddebf6] ">
      <Navbar />
      <MainContent />
    </section>
  );
};

export default AllDrones;
