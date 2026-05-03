import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/Theme-Provider.jsx";
import Header from "./layouts/Header.jsx";
import Footer from "./layouts/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ThemeProvider>
      <div className="p-4">
        <div className="border p-6">
          <Header/>
          <App />
          <Footer/>
        </div>
      </div>
    </ThemeProvider>
  </BrowserRouter>,
);
