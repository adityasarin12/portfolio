import { useState, useCallback } from "react";
import "./styles/Work.css";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "AI Resume Analyzer",
    category: "Resume evaluation pipeline for recruiter workflows",
    tools: "Python • Streamlit • Gemini API • OCR • NLP",
    image: "/images/resume-analyzer.png",
    link: "https://github.com/adityasarin12",
  },
  {
    title: "Voice Assistant",
    category: "Voice-enabled AI assistant with LLM integration",
    tools: "Python • Gemini API • gTTS • LLM",
    image: "/images/voice-assistant.png",
    link: "https://github.com/adityasarin12",
  },
  {
    title: "AI DevOps Failure Prediction System",
    category: "Predictive analytics for infrastructure reliability",
    tools: "Python • ML • Predictive Analytics • Automation",
    image: "/images/ai-devops.png",
    link: "https://github.com/adityasarin12",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;

      setIsAnimating(true);
      setCurrentIndex(index);

      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0
        ? projects.length - 1
        : currentIndex - 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1
        ? 0
        : currentIndex + 1;

    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">

      <div className="work-container section-container">

        <h2>
          My <span>Projects</span>
        </h2>

        <div className="carousel-wrapper">

          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
          >
            <MdArrowBack />
          </button>

          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
          >
            <MdArrowForward />
          </button>

          <div className="carousel-track-container">

            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >

              {projects.map((project, index) => (

                <div className="carousel-slide" key={index}>

                  <div className="carousel-content">

                    <div className="carousel-info">

                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>

                      <div className="carousel-details">

                        <h4>{project.title}</h4>

                        <p className="carousel-category">
                          {project.category}
                        </p>

                        <div className="carousel-tools">

                          <span className="tools-label">
                            Tools & Technologies
                          </span>

                          <p>{project.tools}</p>

                        </div>
                      </div>
                    </div>

                    <div className="carousel-image-wrapper">
                      <img
                        src={project.image}
                        alt={project.title}
                        style={{
                          width: "100%",
                          maxWidth: "650px",
                          borderRadius: "20px",
                          display: "block",
                        }}
                      />
                    </div>
                  </div>
                </div>

              ))}

            </div>
          </div>

          <div className="carousel-dots">

            {projects.map((_, index) => (

              <button
                key={index}
                className={`carousel-dot ${index === currentIndex
                    ? "carousel-dot-active"
                    : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
              />

            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;