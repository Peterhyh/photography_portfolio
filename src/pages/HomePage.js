import { Parallax, ParallaxProvider } from "react-scroll-parallax";
import BO from '../app/assets/img/Bo.jpg'


const HomePage = () => {


    return (
        <ParallaxProvider>
            <div>


                <Parallax
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
        </ParallaxProvider>


    )
};

export default HomePage;