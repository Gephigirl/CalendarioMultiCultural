import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import IntroWithImages from "./IntroWithImages";
import NotionContent from "./NotionContent";
import Manual from "./Manual";

// Graph View 페이지
import SolarLunar from "./graph/SolarLunar";
import CelebrarGrupo from "./graph/CelebrarGrupo";
import Internacionales from "./graph/Internacionales";
import Religiosa from "./graph/Religiosa";
import Identidad from "./graph/Identidad.jsx";
import Independencia from "./graph/Independencia";

function App() {
  return (
    <Router>
      <div className="app" style={{display: "flex", flexDirection: "column", minHeight: "100vh", fontFamily: "Arial, sans-serif" }}>
        <Navbar />
        <main style={{ padding: "1rem", flex: 1 }}>
          <Routes>
            {/* 홈 화면 */}
            <Route path="/" element={<IntroWithImages />} />

            {/* Notion Calendario */}
            <Route
              path="/calendario"
              element={
                <section style={{ height: "950px", width: "100%", display: "flex", flexDirection: "column" }}>
                  <div style={{ flex: 1 }}>
                    <NotionContent
                      notionUrl="https://outgoing-mile-e1b.notion.site/ebd/1feef3092de7809f937ef4510dc7543b"
                      style={{ width: "100%", height: "1000px" }}
                    />
                  </div>
                </section>
              }
            />

            {/* Graph View Routes */}
            <Route path="/graph/solar-lunar" element={<SolarLunar />} />
            <Route path="/graph/celebrar-grupo" element={<CelebrarGrupo />} />
            <Route path="/graph/internacionales" element={<Internacionales />} />
            <Route path="/graph/religiosa" element={<Religiosa />} />
            <Route path="/graph/identidad" element={<Identidad />} />
            <Route path="/graph/independencia" element={<Independencia />} />

            <Route path="/manual" element={<Manual />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
