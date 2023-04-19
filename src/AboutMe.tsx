import './AboutMe.css'
import ContactMe from './components/ContactMe'

function AboutMe() {
    return (
        <div className='main'>
            <div className='about_me_intro'>
                <div className="intro">
                    <h1>Hi There,</h1>
                    <p className='punchline'>I'm Sing Wong, a software engineer with a strong background in ML, bringing over 2.5 years of experience to the table.</p>
                    <div className="description">
                        <p>Ready to code my way onto your team!</p>
                        <p>Open for new opportunities in software engineering.</p>
                    </div>
                    <a href="./resourses/Sing_Wong_Resume.pdf" target="_blank" rel="noreferrer">
                        See Resume
                        <i className="fas fa-arrow-right"></i>
                    </a>
                    <ContactMe></ContactMe>
                </div>

                <img className='my_face' src="my_face.jpg" alt="my face" width="200" height="200" />
            </div>

            

            <div className="bio">
                <h2>Bio</h2>

                <div> title='Software Engineer @ Eightfold AI' year="Apr2022-Feb2023"</div >
                <div> title='Student @ University of California, San Diego' year="June 2022"</div >
                <div> title='Software Engineer @ Translucence Biosystems' year="Feb-Sep2020"</div >
                <div> title='Junior Specialist (ML research) @ UCI Center for AI in Diagnostic Medicine' year="Mar2019-Feb2020"</div >
                <div> title='Student @ University of California, Irvine' year="Dec 2019"</div >
                <div> title='Instructor @ iD Tech' year="Jun-Aug 2019"</div >


            </div>
        </div>
    )
}

export default AboutMe