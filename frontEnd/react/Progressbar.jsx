import { useEffect, useState } from "react";
import { useApiStore } from "./useApiStore";
import "./ProgressBar.css"; // Add styles for smooth UI

const ProgressBar = () => {
  const { loadingCount } = useApiStore();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timer;

    if (loadingCount > 0) {
      setVisible(true);
      setProgress((prev) => (prev < 70 ? prev + 10 : prev)); // Simulate slow start
    } else if (loadingCount === 0 && progress > 0) {
      setProgress(100);
      timer = setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 500);
    }

    return () => clearTimeout(timer);
  }, [loadingCount]);

  return (
    <div
      className={`progress-bar ${visible ? "visible" : ""}`}
      style={{ width: `${progress}%` }}
    />
  );
};

export default ProgressBar;
