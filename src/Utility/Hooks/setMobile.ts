import { useEffect, useState } from "react";

function useMobile() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      console.log(isMobile);
      setIsMobile(window.innerWidth < 600);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return [{ isMobile }];
}

export default useMobile;
