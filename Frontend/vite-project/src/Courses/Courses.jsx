// import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Course";
import Footer from "../components/Footer";
import { ThemeProvider } from "../context/ThemeContext";
function Courses() {
  return (
    <>

    <ThemeProvider>
    <div className="bg-white">
     <Navbar />
      <div className=" min-h-screen ">
        <Course />
      </div>
      <Footer />

     </div>
    </ThemeProvider>

   
    </>
  );
}

export default Courses;