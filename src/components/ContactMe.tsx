import 'react-vertical-timeline-component/style.min.css';
import './ContactMe.css'

function ContactMe() {
    return(
        <div className='main'>
            <h3>Find me on other places</h3>
            <div className='contact-list'>
                <div className='contact'>
                    <i className="fa-brands fa-linkedin"></i>
                    <a href="https://www.linkedin.com/in/sing-wong-378934b8/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                </div>
                <div className='contact'>
                    <i className="fa-brands fa-github"></i>
                    <a href="https://github.com/eiffelwong1" target="_blank" rel="noopener noreferrer">Github</a>
                </div>
                <div className='contact'>
                    <i className="fa-brands fa-kaggle"></i>
                    <a href="https://www.kaggle.com/eiffelwong1/code" target="_blank" rel="noopener noreferrer">Kaggle</a>
                </div>
                <div className='contact'>
                    <i className="fa-solid fa-envelope"></i>
                    <a href="mailto: eiffelynx@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
                </div>
            </div>
        </div>
    )
}

export default ContactMe