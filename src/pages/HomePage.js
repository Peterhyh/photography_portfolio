import { ParallaxBanner } from "react-scroll-parallax";
import BO from '../app/assets/img/Bo.jpg'


const HomePage = () => {


    return (
        <div>


            <ParallaxBanner
                image='../app/assets/img/Bo.jpg'
                speed={-15}
                className="aspect-[2/1]"
            />



            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
            <p>Testing</p>
        </div>


    )
};

export default HomePage;