import React from "react";
import ReactDOM from "react-dom/client";
import App from "./JOURNALAPP.jsx";
import "./index.css";
import AppThemeStyle from "./theme/AppTheme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppThemeStyle>
      <App />
    </AppThemeStyle>
  </React.StrictMode>
);
