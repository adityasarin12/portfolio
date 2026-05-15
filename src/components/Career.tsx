import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section" id="career">
      <div className="career-header">
        <h2>My <span>Experience</span></h2>
      </div>
      <div className="career-container">
        <div className="career-left">
          <div className="career-item">
            <span className="career-item-period">2023 – 2027</span>
            <h3>B.Tech Computer Science Engineering (AI &amp; ML)</h3>
            <h4>Sharda University</h4>
            <p>
              Undergraduate program focused on core computer science with
              specialization in artificial intelligence and machine learning.
            </p>
          </div>

          <div className="career-item">
            <span className="career-item-period">May 2025 – July 2025</span>
            <h3>Design Mechanics India Pvt. Ltd.</h3>
            <h4>AI/ML Intern</h4>
            <p>
              Built an AI Resume Analyzer using Gemini API, OCR, NLP, and
              Streamlit. Developed data extraction, scoring, and insight delivery
              features for hiring workflows.
            </p>
          </div>

          <div className="career-item">
            <span className="career-item-period">May 2026 – June 2026</span>
            <h3>Einstellen.AI</h3>
            <h4>AI/ML Intern</h4>
            <p>
              Working on Alzheimer’s disease prediction and epileptic seizure
              detection using machine learning and deep learning techniques.
              Focused on model validation, feature engineering, and production
              readiness.
            </p>
          </div>
        </div>
        <div className="career-line">
          <span className="career-dot"></span>
          <span className="career-dot"></span>
          <span className="career-dot"></span>
        </div>
      </div>
    </div>
  );
};

export default Career;