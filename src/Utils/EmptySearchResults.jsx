import React from "react";

function EmptySearchResult({ searchValue }) {
  return (
    <p style={{ textAlign: "center", fontSize: "20px" }}>
      No se han encontrado tareas con "{searchValue}"
    </p>
  );
}

export { EmptySearchResult };
