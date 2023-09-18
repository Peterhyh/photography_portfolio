import { ParallaxBanner } from "react-scroll-parallax";
import BO from '../app/assets/img/Bo.jpg';
import Header from '../components/Header';
import NOODLES from '../app/assets/img/Noodles.jpg';
import NORI from '../app/assets/img/Nori.jpg';
import GARDEN from '../app/assets/img/japanese-tea-garden-1.jpg';



const HomePage = () => {

    return (
        <div >

            <ParallaxBanner
                className='bg-container'
                layers={[
                    { image: GARDEN, speed: -20 },
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
                >
                    <div className='preset-title-container'>
                        <div>
                            <p>LIGHTROOM PRESETS</p>
                            <h1>
                                <a href='/'>SHOP PRESETS →</a>
                            </h1>
                        </div>
                    </div>
                </ParallaxBanner>

                <ParallaxBanner
                    className='nori-pic'
                    layers={[
                        { image: NORI, speed: -20 },
                        { speed: -15, },
                    ]}
                />
            </div >
            <ParallaxBanner
                className='bo-pic'
                layers={[
                    { image: BO, speed: -20 },
                    { speed: -10, },
                ]}
            />
        </div >


    )
};

export default HomePage;