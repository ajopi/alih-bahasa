import { AppShell } from "@saas-ui/react";
import FooterPage from "../../components/FooterPage/FooterPage";
import ContentDefault from "../../components/LandingPageContent/ContentDefault";
import { NavbarDefault } from "../../components/NavbarDefault/NavbarDefault";

const LandingPage = () => {
  return (
    <AppShell navbar={<NavbarDefault />} style={{ position: "relative" }}>
      <ContentDefault />
      <FooterPage />
    </AppShell>
  );
};

export default LandingPage;
