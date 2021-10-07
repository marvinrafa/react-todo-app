import React from "react";
import { useStorageListener } from "./useStorageListener";
import "./changeAlert.css";

function ChangeAlert({ synchronize }) {
  const { show, toggleShow } = useStorageListener(synchronize);

  if (show) {
    return (
      <div class="alert-background">
        <div class="alert-box">
          <p class="alert-text">
            <strong>Se han detectado nuevos cambios</strong>
          </p>
          <p class="alert-text">
            Al parecer has realizado una version mas reciente con cambios en los TODOS en
            otra ventana
          </p>
          <button class="alert-button" onClick={() => toggleShow()}>
            Sincronizar <strong class="reload-icon">⟳</strong>
          </button>
        </div>
      </div>
    );
  } else {
    return null;
  }
}

export { ChangeAlert };
