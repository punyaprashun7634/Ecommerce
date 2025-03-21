import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const location = useLocation(); // ✅ This now has Router context

  useEffect(() => {
    if (!window._etmc) window._etmc = [];
    window._etmc.debug = true;
    window._etmc.push(["setOrgId", "514035465"]); // Replace MID with your actual ID
    window._etmc.push(["trackPageView", { path: location.pathname }]);

  }, [location.pathname]); // ✅ Runs when route changes

  return <>{children}</>; // Renders wrapped components
};

export default Layout;
