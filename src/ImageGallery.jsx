import React from "react";

export default function ImageGallery() {
  const images = [
    { src: "/solar.JPG", alt: "Solar" },
    { src: "/graphview.JPG", alt: "Graphview" },
    { src: "/lunar.JPG", alt: "Lunar" },
    { src: "/ibero.jpg", alt: "Iberoamerica" },
    { src: "/calendario.JPG", alt: "Calendario" },
    { src: "/obsidian.JPG", alt: "Obsidian" },
    { src: "/mexica.JPG", alt: "Mexica" },
    { src: "/reloj.JPG", alt: "Reloj" }
  ];

  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",          // 화면 작아지면 자동 줄 바꿈
      gap: "0.5rem",
      marginTop: "2rem",
      marginBottom: "1rem",
      justifyContent: "center"
    }}>
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img.src}
          alt={img.alt}
          style={{
            width: "270px",       // 데스크탑에서는 270px 고정
            height: "auto",
            borderRadius: "8px"
          }}
        />
      ))}
    </div>
  );
}
