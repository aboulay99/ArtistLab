import React from "react";
import Headroom from "react-headroom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Cards from "./components/Cards";
import { RiGalleryLine } from "react-icons/ri";
import { AiFillDatabase } from "react-icons/ai";
import { LuFileJson } from "react-icons/lu";
import ArtSection from "./components/ArtSection";
import MonaSection from "./components/MonaSection";
import PaintSection from "./components/PaintSection";
import PhotoGraphSection from "./components/PhotoGraphSection";
import p1 from "./assets/phtographs/p1.jpg";
import p2 from "./assets/phtographs/p2.jpg";
import p3 from "./assets/phtographs/p3.jpg";
import p4 from "./assets/phtographs/p4.jpg";
import p5 from "./assets/phtographs/p5.jpg";
import p6 from "./assets/phtographs/p6.jpg";

const App = () => {
  return (
    <>
      <Headroom>
        <Navbar />
      </Headroom>
      <Hero />
      <ArtSection />
      <MonaSection />
      <PaintSection />

      {/* PHOTOGRAPY SECTION */}
      <div className="py-10 bg-[#e6d9b7] my-10 flex flex-col justify-center gap-4">
        <div className=" bg-white py-6 w-full flex items-center justify-center">
          <h1 className="text-2xl md:text-3xl text-gray-600 font-Playfair">
            You can publish your work{" "}
          </h1>
        </div>
        <div className="  grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center  ">
          <PhotoGraphSection src={p1} />
          <PhotoGraphSection src={p2} />
          <PhotoGraphSection src={p3} />
          <PhotoGraphSection src={p4} />
          <PhotoGraphSection src={p5} />
          <PhotoGraphSection src={p6} />
        </div>
      </div>
      {/* END */}

      {/* CARDS SECTION */}
      <div className="flex flex-col gap-5">
        <div className="flex items-center justify-center">
          <h1 className="md:text-5xl text-gray-700 py-3 font-Playfair">
            Explore Our Services
          </h1>
        </div>
        <div
          // style={{ backgroundImage: `url(./assets/backCard.jpg)` }}
          className="bg:none md:bg-[url('./assets/backCard.jpg')] bg-cover bg-no-repeat px-3  grid grid-cols-1 gap-x-7 gap-y-4 py-20  justify-items-center md:grid-cols-2 lg:grid-cols-3 bg-slate-200"
        >
          <Cards
            icon={<RiGalleryLine className="text-6xl w-16 h-16" />}
            title={"Our Gallery"}
            text={
              "We have a rich gallery with hundreds of art works made by many creative artists from all around the world"
            }
          />
          <Cards
            icon={<AiFillDatabase className="text-6xl w-16 h-16" />}
            title={"Our Collection"}
            text={
              "We have the biggest Art database  with hundreds of artists and their work"
            }
          />
          <Cards
            icon={<LuFileJson className="text-6xl w-16 h-16" />}
            title={"Our API"}
            text={
              "You can now enjoy our free APi that you can use to find any information about any artist , their personal info and their work"
            }
          />
        </div>
      </div>
      {/* END */}

      <Footer />
    </>
  );
};

export default App;
