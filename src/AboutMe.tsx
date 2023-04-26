import './AboutMe.css'
import ContactMe from './components/ContactMe'
import Timeline from './components/Timeline';

const experience = [
    {
        date: "Apr 2022 - Feb 2023",
        title: "Software Engineer, Eightfold AI",
        description:
            "Worked on backend infrastructure that enables internal services that uses AWS lambda to overcome runtime limit. Coded, deployed, supported, and maintained the feature as a team. Designed and implement DB schema and data storage model, REST APIs for a future product. Assisted with escalations, on-call, and build duty. Having a great understanding of the code development and deployment cycles.",
    },
    {
        date: "Sep 2020 - June 2022",
        title: "University of California, San Diego",
        description: "Master of Science in Computer Science and Engineering - GPA 3.75 - Mainly focused on ML and System architecture",
    },
    {
        date: "Feb 2020 - Sep 2020",
        title: "Software Engineer, Translucence Biosystems",
        description:
            "Created a distributed pipeline for better use of processing power from multiple machines, up hardware utilization from <20% to over 90% for a machine learning pipeline, which later became a product (https://www.translucencebio.com/products/stitchy).",
    },
    {
        date: "Mar 2019 - Feb 2020",
        title: "Junior Specialist (ML research), UCI CAIDM",
        description:
            "Developed and trained U-net classifiers for segmenting cancer cells within a series of MRI scans for the 2019 Kidney and Kidney Tumor Segmentation Challenge.",
    },
    {
        date: "Jun 2019 - Aug 2019",
        title: "Instructor, iD Tech",
        description:
            "Taught students about Python, convolutional neural networks, and reinforcement learning. Created additional teaching materials to provide an up-to-date learning experience.",
    },
    {
        date: "Sep 2017 - Dec 2019",
        title: "University of California, Irvine",
        description: "Bachelor of Science in Computer Science - GPA 3.7",
    },
    {
        date: "Sep 2014 - June 2017",
        title: "Foothill College",
        description: "Studied in Computer Science",
    },{
        date: "July 1997",
        title: "Born in 🇭🇰",
    }
];


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

                <Timeline
                    events={experience}
                ></Timeline>


            </div>
        </div>
    )
}

export default AboutMe