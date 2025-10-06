import React from "react";

export default function Independencia() {
  return (
    <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
      {/* 텍스트 */}
      <div style={{ padding: "1rem" }}>
        <h2>Idependencia</h2>
        <h3>
          Cada nodo está relacionado con los días festivos de distintos países.<br />
          Al analizar estas festividades, cada una está profundamente vinculada con la identidad, la cultura y la historia.
        </h3>
      </div>

      {/* Canva iframe */}
      <iframe
        loading="lazy"
        src="https://www.canva.com/design/DAG1AoaIFVM/StguEEnbF4kHqBPKaa2bAA/view?embed"
        style={{
          flex: 1,          // 남은 공간을 다 차지
          width: "100%",
          border: "none",
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
}
