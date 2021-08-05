import { useEffect, useRef, useState } from "react";
import { Link } from "next/link";

const WelcomeScreen = () => {
  useEffect(() => {
    setInterval(() => {
      window.addEventListener("scroll", () => {
        const side1 = document.getElementById("side1");
        const side2 = document.getElementById("side2");
        side1.style.left = -window.pageYOffset + "px";
        side2.style.left = window.pageYOffset + "px";
      });
    });
  }, []);

  return (
    <>
      <section>
        <div className="side" id="side1">
          <video autoPlay loop muted style={{ width: "100%" }}>
            <source src="note2.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="side" id="side2">
          <video autoPlay loop muted style={{ width: "100%" }}>
            <source src="note2.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      <div className="content">
        <h2>Split Video on Page scroll</h2>
        <p>
          Improve app quality in less time with less effort. Simplify testing,
          triaging, and troubleshooting. Carefully roll out features and monitor
          adoption. Pinpoint, prioritize, and fix stability and performance
          issues early. Boost user engagement with rich analytics, A/B testing,
          and messaging campaigns. Understand your users to better support and
          retain them. Run experiments to test ideas and uncover new insights.
          Customize your app for different user segments. Improve app quality in
          less time with less effort. Simplify testing, triaging, and
          troubleshooting. Carefully roll out features and monitor adoption.
          Pinpoint, prioritize, and fix stability and performance issues early.
          Boost user engagement with rich analytics, A/B testing, and messaging
          campaigns. Understand your users to better support and retain them.
          Run experiments to test ideas and uncover new insights. Customize your
          app for different user segments. Improve app quality in less time with
          less effort. Simplify testing, triaging, and troubleshooting.
          Carefully roll out features and monitor adoption. Pinpoint,
          prioritize, and fix stability and performance issues early. Boost user
          engagement with rich analytics, A/B testing, and messaging campaigns.
          Understand your users to better support and retain them. Run
          experiments to test ideas and uncover new insights. Customize your app
          for different user segments.
        </p>
      </div>
    </>
  );
};

export default WelcomeScreen;
