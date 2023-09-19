import { ParallaxBanner } from "react-scroll-parallax";
import BO from '../app/assets/img/Bo.jpg';
import Header from '../components/Header';
import NOODLES from '../app/assets/img/Noodles.jpg';
import NORI from '../app/assets/img/Nori.jpg';
import GARDEN from '../app/assets/img/japanese-tea-garden-1.jpg';
import Banner from '../components/Banner';



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

                <Banner css='noodles-pic' photo={NOODLES} >
                    <div className='preset-title-container'>
                        <div>
                            <p>LIGHTROOM PRESETS</p>
                            <h1>
                                <a href='/'>SHOP PRESETS →</a>
                            </h1>
                        </div>
                    </div>
                </Banner>
                <Banner css='nori-pic' photo={NORI} />
            </div >
            <Banner css='bo-pic' photo={BO} />
        </div >


    )
};

export default HomePage;