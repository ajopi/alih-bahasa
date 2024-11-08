import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingPage from "./pages/LandingPage/LandingPage";
import "./styles/globalstyles.css";
import { SaasProvider } from "@saas-ui/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SaasProvider>
      <LandingPage />
    </SaasProvider>
  </StrictMode>
);
