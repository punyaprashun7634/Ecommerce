import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (!window._etmc) window._etmc = [];

    // Set Org ID
    window._etmc.push(["setOrgId", "MID"]);

    // Track Page View when route changes
    window._etmc.push(["trackPageView", { path: location.pathname }]);

  }, [location.pathname]); // Runs every time the route changes
};

export default useTracking;
