// Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "#333",
      color: "#fff",
      padding: "1.5rem 2rem", // ← 기존보다 조금 넓게
      textAlign: "center",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: "1rem" // 글씨와 로고 사이 간격
    }}>
      {/* 로고 */}
      <img 
        src="/teclogo.png" 
        alt="TEC de Monterrey Logo" 
        style={{ height: "40px", objectFit: "contain" }} 
      />
      
      {/* 글씨 */}
      <span style={{ fontSize: "1rem", fontWeight: 500 }}>
        TEC de Monterrey, Posgrado en Humanidades Digitales
      </span>
    </footer>
  );
}
