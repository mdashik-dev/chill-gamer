import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRoutes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "./context/ThemeContext.jsx";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <ThemeProvider>
      <HelmetProvider>
        <AppRouter />
      </HelmetProvider>
    </ThemeProvider>
  </AuthProvider>
);
