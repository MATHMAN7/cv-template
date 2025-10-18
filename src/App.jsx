import './App.css'
import telephone from './img/telephone.png'
import email from './img/email.png'
import github from './img/github.png'
import linkedin from './img/linkedin.png'

function App() {
    return (
        <div className="App2">
            <div className="App">
                <div className="name">
                    <h2>Me</h2>
                    <p>Fullstack Developer</p>
                </div>

                <div className="info">
                    <h1>Contact</h1>

                    <div className="contact-item">
                        <img src={telephone} alt="Telephone" className="icon"/>
                        <span>+88955992</span>
                    </div>

                    <div className="contact-item">
                        <img src={email} alt="Email" className="icon"/>
                        <span>me@gmail.com</span>
                    </div>

                    <div className="contact-item">
                        <img src={github} alt="GitHub" className="icon"/>
                        <span>github.com/username</span>
                    </div>

                    <div className="contact-item">
                        <img src={linkedin} alt="LinkedIn" className="icon"/>
                        <span>linkedin.com/in/username</span>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default App
