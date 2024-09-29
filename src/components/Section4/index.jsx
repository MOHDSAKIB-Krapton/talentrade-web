import React from "react";
import { Button } from "@mui/material";

function Section4() {
  return (
    <div className="relative grid overflow-hidden place-content-center m-0 bg-purple-400 h-[50vh] wrapper">
      <Button
        variant="contained"
        className="cursor-pointer"
        style={{
          background: "#9951DB",
          width: "auto",
          fontFamily: "Poppins, sans-serif",
        }}
      >
        Download Now!
      </Button>
    </div>

    // <div className="h-[50rem] w-full bg-white bg-grid-black/[0.2] relative flex items-center justify-center">
    //   {/* Radial gradient for the container to give a faded look */}
    //   <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    //   <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
    //     Backgrounds
    //   </p>
    // </div>
  );
}

export default Section4;
