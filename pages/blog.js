import { Component } from 'react';
import Navigation from 'components/Navigation';
import PageHead from 'components/PageHead';
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
                    <h1 className="md:text-4xl lg:text-5xl text-primary font-thin text-center mb-16 sm:mt-5 md:mt-20">
                        BLOG COMING SOON
                    </h1>

                    <img src="/assets/soon.svg" alt="coming-soon" className="w-3/5 mx-auto" />
                </div>

                <Footer />
            </Navigation>
        );
    }
}

export default Home;
