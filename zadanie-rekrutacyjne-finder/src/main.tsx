import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // Tutaj renderuje się cała aplikacja na ekran
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
