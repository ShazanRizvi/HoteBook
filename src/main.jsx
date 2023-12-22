import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Store from "./context/Store.jsx";

import { ThemeProvider } from "@material-tailwind/react";
import SearchStore from "./context/SearchStore.jsx";

import LandingPage from "./pages/LandingPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
    <ThemeProvider>
      <Store>
        <SearchStore>
          <App />
        </SearchStore>
      </Store>
    </ThemeProvider>
  // </React.StrictMode>
);
