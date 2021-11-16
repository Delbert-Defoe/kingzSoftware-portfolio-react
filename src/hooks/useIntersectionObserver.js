import { useState, useMemo, useEffect } from "react";

const useIntersectionObserver = (targetRef, options, repeat) => {
  const [isVisible, setVisible] = useState(false);

  const callbackFunction = (entries) => {
    const [entry] = entries;

    if (!entry.isIntersecting && !repeat) {
      return;
    }
    setVisible(entry.isIntersecting);
  };

  const optionsMemo = useMemo(() => {
    return options;
  }, [options]);

  useEffect(() => {
    const observer = new IntersectionObserver(callbackFunction, optionsMemo);
    const currentTarget = targetRef.current;

    if (currentTarget) observer.observe(currentTarget);
    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [targetRef, optionsMemo]);

  return isVisible;
};

export default useIntersectionObserver;
