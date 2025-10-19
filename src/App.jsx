import './App.css';
import { projects } from './private/projectsData';
import { useRef } from 'react';

import contactInfo from './private/contactInfo';
import bio from './private/bio';
import skills from './private/skills.js';
import telephone from './img/telephone.png';
import email from './img/email.png';
import github from './img/github.png';
import linkedin from './img/linkedin.png';
import html2pdf from 'html2pdf.js';
import pdfConfig from './private/pdfConfig';

function App() {
    const cvRef = useRef();

    const handleDownloadPDF = () => {
        const element = cvRef.current;
        const options = {
            margin: [0, 0, 0, 0],
            filename: pdfConfig.filename,
            image: { type: 'jpeg', quality: 1 },
            html2canvas: { scale: 1, useCORS: true },
            jsPDF: {
                unit: 'px',
                format: [794, 1123],
                orientation: 'portrait'
            },
            pagebreak: { mode: ['avoid'] }
        };

        html2pdf().set(options).from(element).save();
    };

    return (
        <div className="App2">
            <div className="App" ref={cvRef}>
                <div className="name">
                    <h2>{contactInfo.name}</h2>
                    <p>{contactInfo.title}</p>
                </div>

                <div className="first">
                    <div className="info">
                        <h1 className="contact">Contact</h1>

                        <div className="contact-item">
                            <img src={telephone} alt="Telephone" className="icon" />
                            <span className="span">{contactInfo.phone}</span>
                        </div>

                        <div className="contact-item">
                            <img src={email} alt="Email" className="icon" />
                            <span className="span">{contactInfo.email}</span>
                        </div>

                        <div className="contact-item">
                            <img src={github} alt="GitHub" className="icon" />
                            <span className="span">{contactInfo.github}</span>
                        </div>

                        <div className="contact-item">
                            <img src={linkedin} alt="LinkedIn" className="icon" />
                            <span className="span">{contactInfo.linkedin}</span>
                        </div>
                    </div>

                    <div className="bio">
                        <p>{bio}</p>
                    </div>
                </div>

                <div className="skills">
                    <h1>Skills</h1>
                    <div className="skills-list">
                        {skills.map(skill => (
                            <span key={skill} className="skill-item">{skill}</span>
                        ))}
                    </div>
                </div>

                <div className="projects">
                    <h1>Projects</h1>
                    <div className="project-list">
                        {projects.map(project => (
                            <div className="project-item" key={project.name}>
                                <h3>{project.name}</h3>
                                <p>{project.tech}</p>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="education">
                    <h2>Education</h2>
                    <p><strong>Bachelor of Computer Science</strong></p>
                    <p>University of Tirana — Third Year Student</p>
                    <p>Completed a full Java programming course and earned a certificate awarded by Belinda Balluku.</p>
                </div>
            </div>

            <button onClick={handleDownloadPDF} className="print-button">
                Download as PDF
            </button>
        </div>
    );
}

export default App;
