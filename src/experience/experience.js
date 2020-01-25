import React from 'react';
import Footer from '../footer/footer';

import './experience.css';
import './mobileExperience.css';

const Experience = () => {


    return (
        <div>
            <div className="Experience">
                <div id='Column1'>
                    <h1>Daniel</h1>
                    <h1>Critchfield</h1>
                    <section id='IntroSection'>
                        <p>
                            I’m a computer engineering graduate from the University of Pittsburgh with a focus in software engineering.
                            I am always looking to learn and work with new technologies as well as contribute to projects that impact people
                            in a positive way.
                        </p>
                    </section>
                    <section id='ContactSection'>
                        <p>
                            2635 East Carson Street Apt 351<br />
                            Pittsburgh, PA 15213<br />
                            (412) 853 - 0235<br />
                            daniel.critchfield.primary@gmail.com<br />
                        </p>
                    </section>
                    <section id='ExperienceSection'>
                        <h4 className='Heading'>Experience</h4>
                        <p>
                            <b>Dick’s Sporting Goods - ​Coraopolis, Pennsylvania</b> <br />
                            <i>Software Engineer</i> <br /><br />
                            June 2018 - PRESENT <br /><br />
                            I gained experience working a product team that utilized lean methodologies and XProgramming.
                            I utilized paired programming, test driven development and continuous integration pipelines to quickly provide
                            production ready code on a daily basis. I worked on back end systems that were Spring Boot Java applications to
                            support various business functions. I then deployed these applications to the cloud using PCF as the platform.
                        </p>
                        <p>
                            <b>HM Health Solutions - ​Pittsburgh, Pennsylvania</b> <br />
                            <i>Application Developer</i> <br /><br />
                            December 2017 - June 2018 <br /><br />
                            I was a part of a team that  created automated tests for multiple business applications <br />
                            using Java and Selenium. I worked with QAs across multiple products to help design and implement test plans <br />
                            based on each application’s specific requirements.  I learned how to work with a remote team, as all developers  <br />
                            on the team were in Harrisburg while I worked in Pittsburgh. <br />
                        </p>
                    </section>
                    <section id='EducationSection'>
                        <h4 className='Heading'>Education</h4>
                        <p>
                            <b>University of Pittsburgh ​— ​Computer Engineering BSE</b> <br />
                            <i>2013 - 2017</i> <br /><br />
                            Focused on software engineering while also developing a deep understanding of computer architecture. <br />
                            I utilized my time at Pitt by assisting in research, pursing my interest in software outside of class through <br />
                            personal projects with friends and competing in a hackathon. <br />
                        </p>
                    </section>
                </div>

                <div id='Column2'>
                    <section id='LangFrameSection'>
                        <h4 className='Heading'>Languages & Frameworks</h4>
                        <p>Java</p>
                        <p>JUnit</p>
                        <p>Spring Boot</p>
                        <p>C#</p>
                        <p>Python</p>
                        <p>SQL</p> 
                        <p>Selenium</p> 
                        <p>HTML</p>
                        <p>CSS</p>
                        <p>Javascript</p>
                        <p>React</p>
                    </section>
                    <section id='TechAndMethodsSection'>
                        <h4 className='Heading'>Technologies & Methodologies</h4>
                        <p>Agile Scrum</p>
                        <p>Lean Startup</p>
                        <p>XPProgramming</p>
                        <p>Git</p>
                        <p>Github</p>
                        <p>Concourse CI</p>
                        <p>Redis</p>
                        <p>RabbitMQ</p>
                        <p>Pivotal Cloud Foundry (PCF)</p>
                    </section>
                </div>
            </div>
            <Footer id='ExperienceFooter' />
        </div>
    );
}

export default Experience;