import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: "1.5rem 2rem",
      background: "#ffffff",
      boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
      fontSize: "1.1rem",
      position: "sticky",
      top: 0,
      zIndex: 100
    }}>
      <Link to="/" style={{ marginRight: "1.5rem", textDecoration: "none", color: "#333", fontWeight: 600 }}>Home</Link>
      <Link to="/calendario" style={{ marginRight: "1.5rem", textDecoration: "none", color: "#333", fontWeight: 600 }}>Calendario</Link>

      {/* Graph View 드롭다운 */}
      <div
        style={{ position: "relative", marginRight: "1.5rem" }}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span style={{ cursor: "pointer", fontWeight: 600, color: "#333" }}>
          Graph View ▼
        </span>

        {open && (
          <div style={{
            position: "absolute",
            top: "110%",
            left: 0,
            background: "#fff",
            borderRadius: "8px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            display: "flex",
            flexDirection: "column",
            minWidth: "220px",
            overflow: "auto",
            transition: "all 0.2s ease-in-out",
            zIndex: 1000,
            
            /* 반응형 적용 */
            maxHeight: "300px", // 화면 좁으면 스크롤
          }}>
            {[
              ["Solar vs Lunar", "/graph/solar-lunar"],
              ["Celebrar grupo", "/graph/celebrar-grupo"],
              ["Días internacionales", "/graph/internacionales"],
              ["Religiosa", "/graph/religiosa"],
              ["Identidad", "/graph/identidad"],
              ["Independencia", "/graph/independencia"]
            ].map(([label, path]) => (
              <Link
                key={path}
                to={path}
                style={{
                  padding: "0.75rem 1rem",
                  textDecoration: "none",
                  color: "#333",
                  fontWeight: 500,
                  transition: "background 0.2s, color 0.2s"
                }}
                onMouseEnter={e => e.target.style.background = "#f0f0f0"}
                onMouseLeave={e => e.target.style.background = "#fff"}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
      <Link to="/manual" style={{ marginRight: "1.5rem", textDecoration: "none", color: "#333", fontWeight: 600 }}>Manual</Link>

      {/* 모바일 화면용 CSS */}
      <style>
        {`
          @media (max-width: 600px) {
            nav {
              flex-direction: column;
              align-items: flex-start;
              font-size: 1rem;
            }

            nav a {
              margin: 0.3rem 0;
            }

            div[style*="position: relative"] {
              width: 100%;
            }

            div[style*="position: absolute"] {
              min-width: 100% !important;
              max-height: 200px !important;
            }
          }
        `}
      </style>
    </nav>
  );
}
