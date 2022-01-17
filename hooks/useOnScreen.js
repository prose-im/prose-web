import { useState, useEffect } from "react";

function useOnScreen({ ref, options }) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting);
      },
      options
    );
    if (ref && ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);
  return isIntersecting;
}

export default useOnScreen;