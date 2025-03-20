import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (!window._etmc) window._etmc = [];
    
    window._etmc.push(["setOrgId", "514035465"]);
    window._etmc.push(["trackPageView"]);

  }, [location.pathname]); // Runs when route changes
};

export default useTracking;
