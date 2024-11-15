import React, { useState } from "react";
import "./Carrusel.css";

const Carousel: React.FC = () => {
  const images = [
    "https://imgs.search.brave.com/sWn1epxOfEHz0nJuxLSD32VzLIkfd8B_HhWj3yhRHUE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJzLmNvbS9p/bWFnZXMvaGQvb25l/LXBpZWNlLWNoYXJh/Y3RlcnMtMTA4MC14/LTE5MjAtd2FsbHBh/cGVyLTZ2a3lueXM1/eHRpZGsyZ2IuanBn",
    "https://imgs.search.brave.com/RpLBvLN4F4a3uValJvev1gmQihepl3Qk3522BqzMncI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzIzLzc5/LzQ4LzIzNzk0OGE2/ZDUwODgyNzA1MDFj/MjkxOGEzYjI3ZDEx/LmpwZw",
    "https://imgs.search.brave.com/HgUG6D0EBC3DXLbVplWww1P_oS71z5yHoKcetHVpVRo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9iZWVi/b20uY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIyLzEyL3Nh/bmppaS5qcGc_dz02/NDA",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => setCurrentIndex((currentIndex + 1) % images.length);
  const prevSlide = () => setCurrentIndex((currentIndex - 1 + images.length) % images.length);

  return (
    <section>
      <h1>Carrusel</h1>
      <div className="carousel">
        <button onClick={prevSlide}>{"<"}</button>
        <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        <button onClick={nextSlide}>{">"}</button>
      </div>
    </section>
  );
};

export default Carousel;