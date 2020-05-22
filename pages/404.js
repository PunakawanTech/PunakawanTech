import Button from 'components/Button';
import Navigation from 'components/Navigation';
import Footer from 'components/Footer';

function Error() {
    return <Navigation>
        <div className="mt-20">
            <img src="/assets/404.svg" alt="404" className="w-4/5 mx-auto" />

            <Button href="/" className="text-center text-primary" style={{display: 'block', margin: '40px auto', width: 100}}>
                Home
            </Button>
        </div>
        
        <Footer />
    </Navigation>;
}

export default Error;