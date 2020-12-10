import React from 'react';
import {Jumbotron,Button,Nav,Container,Row,Col,CardColumns,Card} from 'react-bootstrap';


export class AboutKJComponent extends React.Component{
    render() {
        return(
            <div className="container">
                <Jumbotron>
                    <h1 className="orange">Welcome to K&J Total Care!</h1>
                    <p>Welcome to K&J Total Care! We are honored that you decided to visit our page to
                        learn about whom we are and who we serve!
                    </p>
                </Jumbotron>

                <Container>
                    <Row>
                        <Col>
                            <h1 className="orange">Clients are the center of our hearts.</h1>
                            <p>
                                We start where they are and end when their needs have been met.
                                We serve diverse populations including children, adolescents, middle aged adults and seniors citizens.
                                Our clients have a wide variety of needs depending on each individual,
                                couple and family to include pets who know are so important.
                                Our clients have medical, psychiatric diagnosis, dual diagnosis,
                                special needs and there are times when we have to help people determine what their needs are.
                            </p>
                        </Col>
                        <Col><img src="/shutterstock_1402666292.jpg" alt="Card image cap" height="500" width="720"/></Col>
                    </Row>
                </Container>
                <br/>
                <br/>
                <Container>
                    <Row>
                        <Col><img src="/shutterstock_1451191475.jpg" alt="Card image cap" height="400" width="620"/></Col>
                        <Col>

                            <h1 className="orange">
                                About Me
                            </h1>
                            <p className="red"><strong >“To whom much is given much is required” </strong>Luke 12:48 </p>
                            <p>
                                I have been blessed to work for so many amazing families.
                                I have been able to travel with my clients and be able to take time from work to support and be with my own family.
                                The friendships that I have made over the years will last a lifetime because I value and cherish those I worked with.
                                I have been in the health care field my entire life. It started when I was a little girl.
                                I always helped my family with their wounds, wheelchairs, administering CPR, and delivering children.
                                One of my proudest accomplishments was caring for my grandmother Maggie who raised me until she passed.
                                My eclectic experiences truly made me a well rounded and adaptable.
                                I have worked in the health field at the collegiate level serving students at Salem College.
                                I served Veterans at the VA Hospitals in Durham and in West Palm Beach.
                                I worked as a Victim Advocate with Family Services.
                                Most recently I worked as a Teaching Assistant in the W-S Forsyth County School System in Title I schools with children.
                                I have worked in various setting including hospitals, nursing homes, and patient homes.
                                Venturing to unfamiliar realms I served customers within a financial institution setting
                                as a financial service representative and back-up support.
                                I have worked in critical care units, pediatrics, dermatology, neurology, cardiology, orthopedics,
                                general medicine and surgery.
                                Unbenounced to me I would always found myself back in the helping profession this is where I belong.
                            </p>
                        </Col>
                    </Row>
                </Container>
                <br/>
                <Container>
                    <img src="/shutterstock_1565217376.jpg" alt="Card image cap" height="700" width="1080"/>
                    <Jumbotron className="text-center p-6">
                        <a href="/caregiver-resource/job-application">
                            <h1 className="orange">
                                Join Our Team, Work With Us!
                            </h1>
                        </a>
                        <p>
                            It is our belief that we are as successful as our team.  We are all equal.
                            Every person can bring  a multitude of work and life experiences to enhance themselves and other people.
                            We value employees and hold them to a high standard as well as ourselves. The job that we do is essential and vital.
                            We are dedicated to providing the best quality of care.
                            The focus of the agency is honesty, communication, continuous training, and professionalism.
                        </p>
                    <br/>
                        <a href="/contact">
                            <h1 className="orange">
                                Join Our Family, Let Us Serve You!
                            </h1>
                        </a>
                        <p>
                            Why Us? Not only have I been in this field for more than half my life but my spiritual
                            and professional journey sets this agency apart.
                            At K&J we adhere to the 3F’s Faith, Family, Friendship and 3’Cs Commitment, Collaboration and Communication.
                        </p>
                    </Jumbotron>
                </Container>
                <Container>
                    <h1 className="orange">
                        Our Future
                    </h1>
                    <p>
                        When I created this company it wasn’t just for me and my career.
                        It is also my purpose to offer opportunities for  RN’s, LPN’s, CNA’s, PCA’s, Companions/Sitters,
                        and those aspiring to be in the medical field. My long term goal is to offer franchise opportunities
                        and to become a nationwide conglomerate. I would like to expand my management team, staff,
                        offer CNA classes, provider courses, which is required to open Home Health agencies.
                        I will always embody the spirit of compassion, integrity, dignity, dedication, loyalty and excellence
                        proven by my lifelong track record. I always take deep breaths and have moments of total gratitude
                        when I reflect on having  been in the healthcare field for three decades and plan to have a lasting
                        legacy agency whereby  I can be here three more…
                    </p>
                    <img src="/shutterstock_1830020408.jpg" alt="Card image cap" height="700" width="1080"/>
                    <br/>
                    <br/>
                    <p className="red">
                        *Due to the <strong>COVID-19</strong> worldwide pandemic, safety and necessary precautions are even more a priority.
                        We will focus and educate all employees to wear the proper PPE, when caring for each of our Clients.
                        We want to protect our vulnerable and at risk populations, our dedicated employees, and every family member involved.
                    </p>
                    <p className="red">
                        * On behalf of <strong className="orange">K&J Total Care</strong>, we would like to say thank you to everyone who works on the front lines
                        during this pandemic each and every day you sacrifice to serve our families. We would also salute our
                        Active Duty Military and Veterans of the US Armed Forces and all those who care for individuals with
                        intellectual and developmental disabilities.
                    </p>
                </Container>

            </div>
        )
    }
}
