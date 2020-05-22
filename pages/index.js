import { Component } from 'react';
import Navigation from 'components/Navigation';
import PageHead from 'components/PageHead';
import Card from 'components/Card';
import Avatar from 'components/Avatar';
import Footer from 'components/Footer';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Navigation>
                <PageHead title="Home" />

                <div id="home" className="grid grid-cols-2 gap-5">
                    <img src="/assets/vc.svg" alt="landing-page" />

                    <div>
                        <h1 className="xs:text-sm md:text-4xl lg:text-6xl text-default font-bold">
                            Make Your Business More Profitable
                            <p className="xs:text-xs text-lg text-default">
                                We will help by planning, design, develop, and even training.
                            </p>
                        </h1>
                        <div className="xs:mt-5 mt-10">
                            <a
                                href="mailto:me@punakawantech.com"
                                className="transition duration-500 hover:bg-default rounded-full bg-primary hover:text-primary shadow-lg font-semibold text-inverse py-3 px-10 xs:py-1 xs:px-5 border border-blue-500 rounded"
                            >
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>

                <div id="services">
                    <h1 className="md:text-4xl lg:text-5xl text-primary font-bold text-center xs:mt-8 md:mt-20">
                        STUFF WE DO
                        <p className="text-lg text-default">
                            WHAT CAN WE OFFERS TO YOU. HERE IS OUR FIELDS OF DEVELOPMENT.
                        </p>
                    </h1>

                    <div className="flex mt-10 flex-wrap">
                        <Card
                            className="sm:w-full md:w-1/2 lg:w-1/3 p-1"
                            title="Front-end"
                            desc="we design and build front-end web application and mobile application"
                            tags={['reactjs', 'nextjs', 'reactnative']}
                        />
                        <Card
                            className="sm:w-full md:w-1/2 lg:w-1/3 p-1"
                            title="Back-end"
                            desc="we develop rest api for our front-end application"
                            tags={['php', 'nodejs', 'python']}
                        />
                        <Card
                            className="sm:w-full md:w-1/2 lg:w-1/3 p-1"
                            title="Artificial Intelligence"
                            desc="we build artificial intelligence app that can support your business"
                            tags={['python', 'tensorflow', 'pytorch']}
                        />
                        <Card
                            className="sm:w-full md:w-1/2 lg:w-1/3 p-1"
                            title="Business Intelligence"
                            desc="business analaytics make your businees more powerfull"
                            tags={['mongodb', 'powerbi', 'bigdata']}
                        />
                        <Card
                            className="sm:w-full md:w-1/2 lg:w-1/3 p-1"
                            title="Company Profile"
                            desc="we design and develop static or dynamic company profile for your business"
                            tags={['nextjs', 'uiux', 'html', 'css']}
                        />
                        <Card
                            className="sm:w-full md:w-1/2 lg:w-1/3 p-1"
                            title="Analyst"
                            desc="we offer analyst services for your business, including development and business analyst"
                            tags={['analyst', 'devops', 'management']}
                        />
                    </div>
                </div>

                <div id="about-us">
                    <h1 className="md:text-4xl lg:text-5xl text-primary font-bold text-center mt-10 md:mt-20">
                        ABOUT US
                        <p className="text-lg text-default">
                            COMPANY OVERVIEW AND THE TEAM OF DEVELOPER.
                        </p>
                    </h1>

                    <div className="mt-5 text-justify text-default">
                        This Company started in 2019. Started with 4 team members, this company run
                        till now. This company have done many projects out there, from small to
                        enterprise level. The vision of this company is to create something that
                        help people to make this life simple with new and modern technology. To
                        accomplish that vision, we have to build a great team from internal of this
                        company, we try to learn something new everyday, we create an idea and work
                        with that idea.
                    </div>

                    <h3 className="md:text-2xl lg:text-3xl text-primary font-semibold text-center mt-10 mb-3">
                        Our Teams
                    </h3>

                    <div className="flex justify-center items-center flex-wrap">
                        <Avatar>JS</Avatar>
                        <Avatar>SC</Avatar>
                        <Avatar>BN</Avatar>
                        <Avatar>DS</Avatar>
                        <Avatar>AW</Avatar>
                        <Avatar>AD</Avatar>
                        <Avatar>JW</Avatar>
                    </div>
                </div>

                <Footer />
            </Navigation>
        );
    }
}

export default Home;
