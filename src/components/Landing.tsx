import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <div className="landing-section" id="landingDiv">
      <div className="landing-container">
        <div className="landing-copy">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ADITYA
              <br />
              <span>SARIN</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>AI/ML Engineer &</h3>
            <div className="hero-tags">
              <span>GEN AI</span>
              <span>LLM DEVELOPER</span>
            </div>
          </div>
        </div>
      </div>
      {children}
    </div>
  );
};
export default Landing;