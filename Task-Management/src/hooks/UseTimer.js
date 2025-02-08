import { useState, useEffect } from "react";

export default function UseTimer() {
  const [time, setTime] = useState({
    hr: 0,
    min: 0,
    sec: 0,
  });

  const [isPaused, setIsPaused] = useState(true);

  const updateTimer = (initialTime) => {
    if (initialTime) {
      const [newHr, newMin] = initialTime.split(":").map(Number);
      setTime({ hr: newHr, min: newMin, sec: 0 });
    } else {
      setTime({ hr: 0, min: 0, sec: 0 });
    }
  };

  const togglePause = () => setIsPaused((prev) => !prev);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setTime((prev) => {
        const { hr, min, sec } = prev;

        if (hr === 0 && min === 0 && sec === 0) {
          clearInterval(interval); 
          return prev;
        }

        if (sec > 0) {
          return { ...prev, sec: sec - 1 };
        } else if (min > 0) {
          return { ...prev, min: min - 1, sec: 59 };
        } else if (hr > 0) {
          return { hr: hr - 1, min: 59, sec: 59 };
        }

        return prev;
      });
    }, 1000);

    return () => clearInterval(interval); 
  },[time]);

  const formattedTime = `${String(time.hr).padStart(2, "0")}:${String(
    time.min
  ).padStart(2, "0")}:${String(time.sec).padStart(2, "0")}`;

  return { updateTimer, togglePause, formattedTime, isPaused   };
}
