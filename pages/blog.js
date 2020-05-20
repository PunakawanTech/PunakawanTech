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

                <div className="mt-20">
                    <h1 className="md:text-4xl lg:text-6xl text-blue-700 font-thin text-center mb-16 sm:mt-5 md:mt-20">
                        COMING SOON
                    </h1>

                    <img src="/assets/soon.svg" alt="coming-soon" className="w-4/5 mx-auto" />
                </div>

                <Footer />
            </Navigation>
        );
    }
}

export default Home;
