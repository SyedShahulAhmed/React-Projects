import React from "react";
import img1 from "../assets/One.jpg";
import img2 from "../assets/two.jpeg";
import img3 from "../assets/three.jpeg";
import img4 from "../assets/four.jpeg";
import img5 from "../assets/five.png";

const images = [img1, img2, img3, img4, img5];

export const Background = ({ heroCount }) => {
  return (
    <img
      src={images[heroCount]}
      alt="background"
      className="h-screen w-full fixed top-0 left-0 right-0 bottom-0 object-cover -z-10"
    />
  );
};

export default Background;
