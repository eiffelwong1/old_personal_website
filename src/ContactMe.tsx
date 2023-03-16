import { Container } from '@chakra-ui/layout';
import 'react-vertical-timeline-component/style.min.css';
import './components/App.css'

function ContactMe() {
    return(
        <Container>
            <h2>Me On The Web</h2>
            <div>
                <i className="fa-brands fa-github"></i>
                <a href="https://github.com/eiffelwong1" target="_blank" rel="noopener noreferrer">Github</a>
            </div>
            <div>
                <i className="fa-brands fa-kaggle"></i>
                <a href="https://www.kaggle.com/eiffelwong1/code" target="_blank" rel="noopener noreferrer">Kaggle</a>
            </div>
            <div>
                <i className="fa-brands fa-linkedin"></i>
                <a href="https://www.linkedin.com/in/sing-wong-378934b8/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
            <div>
                <i className="fa-solid fa-envelope"></i>
                <a href="mailto: eiffelynx@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            </div>
        </Container>
    )
}

export default ContactMe