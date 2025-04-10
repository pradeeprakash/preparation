import { useState, useEffect } from "react";

const TrafficLight = () => {
  const lights = ["red", "green", "yellow"];
  const timeouts = { red: 4000, green: 3000, yellow: 1000 }; // Dynamic timeouts
  const [currentLight, setCurrentLight] = useState("red");

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLight((prevLight) => {
        const nextIndex = (lights.indexOf(prevLight) + 1) % lights.length;
        return lights[nextIndex];
      });
    }, timeouts[currentLight]);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [currentLight]);

  return (
    <div className="traffic-light">
      {lights.map((light) => (
        <div
          key={light}
          className={`light ${light} ${currentLight === light ? "active" : ""}`}
        />
      ))}
    </div>
  );
};

export default TrafficLight;

// .traffic-light {
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 80px;
//     background-color: black;
//     padding: 10px;
//     border-radius: 10px;
//   }

//   .light {
//     width: 50px;
//     height: 50px;
//     border-radius: 50%;
//     margin: 10px 0;
//     background-color: gray;
//     transition: background 0.5s;
//   }

//   .red.active {
//     background-color: red;
//   }

//   .green.active {
//     background-color: green;
//   }

//   .yellow.active {
//     background-color: yellow;
//   }
