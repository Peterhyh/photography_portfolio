import { ParallaxBanner } from "react-scroll-parallax";
import BO from '../app/assets/img/Bo.jpg';
import Header from '../components/Header';
import NOODLES from '../app/assets/img/Noodles.jpg';
import NORI from '../app/assets/img/Nori.jpg';
import Photo from '../features/home/Photo';


const HomePage = () => {

    return (
        <div >

            <ParallaxBanner
                className='bg-container'
                layers={[
                    { image: BO, speed: -20 },
                    { speed: -15, },
                ]}
            >
                <Header />
            </ParallaxBanner>
            <div className='home-second-section'>

                <ParallaxBanner
                    className='noodles-pic'
                    layers={[
                        { image: NOODLES, speed: -20 },
                        { speed: -15, },
                    ]}
                />

                <ParallaxBanner
                    className='nori-pic'
                    layers={[
                        { image: NORI, speed: -20 },
                        { speed: -15, },
                    ]}
                />
            </div >
        </div >


    )
};

export default HomePage;