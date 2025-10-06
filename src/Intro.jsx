// Intro.jsx
import React from "react";

export default function Intro() {
  return (
    <section
      style={{
        padding: "2rem 2rem",
        backgroundColor: "#f9f9f9",
        textAlign: "left",
        borderBottom: "1px solid #ddd",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem", lineHeight: "1.6", maxWidth: "1000px",margin: "0 auto"}}>
        🌟Exploración Cultural a través de Calendarios📅
      </h1>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.6", maxWidth: "1000px", margin: "0 auto" }}>
        Los calendarios son espacios donde se almacena la identidad, la cultura y la historia de los pueblos. Este proyecto investiga cómo los calendarios de Iberoamérica reflejan estas dimensiones, actualmente centrado en Costa Rica, España, México, Colombia y El Salvador, con Corea como grupo comparativo.
      </p>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.6", maxWidth: "1000px", margin: "1rem auto 0" }}>
        A través de herramientas digitales como Notion y Obsidian, se digitalizan festividades y celebraciones para visualizar conexiones culturales y patrones de significado, integrando conceptos de cultura e identidad (Hall, 1996; Norton, 2013), memoria colectiva y prácticas culturales (Connerton, 1989; Nora, 1989), y metodologías de humanidades digitales (Gold & Klein, 2016; Burdick et al., 2012).
      </p>
      <p style={{ fontSize: "1.2rem", lineHeight: "1.6", maxWidth: "1000px", margin: "1rem auto 0" }}>
        Aunque es una etapa inicial, el proyecto sienta las bases para expandir el análisis a otros países y continentes, creando recursos interactivos que faciliten futuras investigaciones sobre identidad, cultura e historia, y demostrando que incluso sin experiencia directa en ciertas tradiciones culturales, su significado puede interpretarse mediante análisis digital.
      </p>
    </section>
  );
}
