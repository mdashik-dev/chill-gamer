import { createRoot } from "react-dom/client";
import "./index.css";
import AppRouter from "./routes/AppRoutes.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { HelmetProvider } from "react-helmet-async";

createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <HelmetProvider>
      <AppRouter />
    </HelmetProvider>
  </AuthProvider>
);
