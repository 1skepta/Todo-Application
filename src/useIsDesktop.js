import { useState, useEffect } from "react";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    const handleResize = () => setIsDesktop(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleResize);

    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return isDesktop;
}

export default useIsDesktop;
