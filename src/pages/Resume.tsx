import React from 'react';
import './Resume.css';

const Resume: React.FC = () => {
  return (
    <div className="resume-page">
      <div className="resume-content">
          <iframe
            title="Resume Preview"
            src="https://docs.google.com/document/d/1qS7GbhhcY93-lUimYmne9grghXlt_AGJ/preview">
            Loading…
          </iframe>
        </div>
      </div>
    );
};

export default Resume;
