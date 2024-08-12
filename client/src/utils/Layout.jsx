import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
// eslint-disable-next-line react/prop-types
const HideNavLayout = ({ children }) => {
  const location = useLocation();
  const [showNav, setShowNav] = useState(false);
  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setShowNav(false);
    } else {
      setShowNav(true);
    }
  }, [location]);

  return <div>{showNav && children}</div>;
};

export default HideNavLayout;