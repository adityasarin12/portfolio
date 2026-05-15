import { useState } from "react";
import "./styles/TechStack.css";

const techStack = [
  { name: "Python", logo: "/images/python.png" },
  { name: "TensorFlow", logo: "/images/tensorflow.png" },
  { name: "Docker", logo: "/images/docker.png" },
  { name: "AWS", logo: "/images/aws.png" },
  { name: "Streamlit", logo: "/images/streamlit.png" },
  { name: "Gemini", logo: "/images/gemini.png" },
];

const TechStack = () => {
  const [hiddenLogos, setHiddenLogos] = useState<Record<string, boolean>>({});

  function handleLogoError(name: string) {
    setHiddenLogos((s) => ({ ...s, [name]: true }));
  }

  return (
    <div className="tech-section" id="tech">
      <div className="section-container">
        <h2>
          Tech <span>Stack</span>
        </h2>
        <div className="tech-sphere-grid">
          {techStack.map((tech, index) => (
            <div
              className={`tech-ball ${tech.logo ? "has-logo" : "no-logo"}`}
              key={index}
              style={{ animationDelay: `${(index % 5) * 0.3}s` }}
            >
              {tech.logo && !hiddenLogos[tech.name] && (
                <img
                  src={tech.logo}
                  alt={tech.name}
                  onError={() => handleLogoError(tech.name)}
                />
              )}
              <span className="tech-label">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;