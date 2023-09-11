import { Parallax } from "react-scroll-parallax";
import { ParallaxProvider } from "react-scroll-parallax";
import BO from '../app/assets/img/Bo.jpg';

const HomePage = () => {


    return (
        <ParallaxProvider>
            <div>
                <p>Photography Portfolio</p>
                <Parallax translateY={['100px', '-100px']} >
                    <img height='500px' src={BO} alt='Bo holding an umbrella' />
                </Parallax>
            </div>
        </ParallaxProvider>
    )
};

export default HomePage;