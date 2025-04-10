import { useState, useEffect } from "react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  const formatTime = (time) => time.toString().padStart(2, "0");

  const hours = formatTime(Math.floor(seconds / 3600));
  const minutes = formatTime(Math.floor((seconds % 3600) / 60));
  const secs = formatTime(seconds % 60);

  return (
    <div style={{ fontSize: "24px", fontWeight: "bold" }}>
      {hours}:{minutes}:{secs}
    </div>
  );
};

export default Timer;
