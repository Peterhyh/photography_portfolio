import { ParallaxBanner } from "react-scroll-parallax";
import BO from '../app/assets/img/Bo.jpg';
import Header from "../components/Header";


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

            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
        </div >


    )
};

export default HomePage;