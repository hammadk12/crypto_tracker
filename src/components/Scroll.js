import { useEffect } from "react";
import { useLocation } from 'react-router-dom'

// scrolls to top of page when redirected
const Scroll = ({ history }) => {
    const location = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [location]);
  
    return null;
  };
  
  export default Scroll