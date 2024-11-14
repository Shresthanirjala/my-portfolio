import React from "react";

const Landing = () => {
  return (
    <div>
      <div
        style={{
          backgroundImage: "url(landingbg.svg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "800px", // adjust height as per your layout
        }}
        className="flex justify-center"
      >
        <div className="mt-52 flex flex-col gap-7 text-center w-[400px]">
          <h1 className=" text-5xl text-bold font-Quicksand ">
            Nirjala Shrestha
          </h1>
          <h2 className="font-Quicksand">
            HI I’m a Junior front-end developer crafting responsive interfaces
            using React and the MERN stack. Passionate about learning and
            building.
          </h2>
          <div className="flex justify-center items-center">
            <button className=" rounded-2xl bg-[#D37A54] w-[250px] h-[60px] text-center text-white text-bold font-Quicksand text-2xl">
              PROJECTS
            </button>
          </div>
        </div>
        <div>gg</div>
      </div>
    </div>
  );
};

export default Landing;
