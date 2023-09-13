import { ParallaxBanner } from "react-scroll-parallax";
import BO from '../app/assets/img/Bo.jpg';


const HomePage = () => {


    return (
        <div >
            <ParallaxBanner
                className='bg-container'
                layers={[
                    { image: BO, speed: -20 },
                    {
                        speed: -15,
                        childern: (
                            <h1>Photography</h1>
                        )
                    },
                ]}
            />



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