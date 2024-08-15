import React, { useEffect } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css";
import "animate.css/animate.compat.css";

export default function AosAnimation() {
  return (
    <div>
      <ScrollAnimation animateOnce={false} animateIn="fadeInLeft">
        Some Text
      </ScrollAnimation>
      <h1>Hello world!</h1>
      <ScrollAnimation animateIn="fadeIn">Some Text</ScrollAnimation>
      {/* <ScrollAnimation className="box1" animateIn="fadeIn" >
            <h2>Box 1</h2>
        </ScrollAnimation>
        <ScrollAnimation className="box2" animateIn="fadeIn" >
            <h2>Box 2</h2>
        </ScrollAnimation>
        <div className="box3" >
            <h2>Box 3</h2>
        </div>
        <div className="box4" >
            <h2>Box 4</h2>
        </div> */}
    </div>
  );
}
