import React, { useEffect, useState } from "react";

function About() {
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(0);
  const [move, setMove] = useState(0);

  const touchEnd = (event) => {
    console.log(start + " " + move);
    if (count > 0 && move - start > 50) {
      setCount(count - 1);
      console.log(count);
    } else if (count < 1 && start - move > 50) {
      setCount(count + 1);
      console.log(count);
    }
  };

  const touchStart = (event) => {
    setStart(event.touches[0].clientY);
  };
  const touchMove = (event) => {
    setMove(event.touches[0].clientY);
  };
  return (
    <div
      onTouchStart={touchStart}
      onTouchMove={touchMove}
      onTouchEnd={touchEnd}
      style={{ height: "100%", width: "100%", backgroundColor: "blue" }}
    >
      {(function () {
        if (count === 0) {
          return <div>Intro</div>;
        } else if (count === 1) {
          return <div>What can I do?</div>;
        }
      })()}
    </div>
  );
}

export default About;
