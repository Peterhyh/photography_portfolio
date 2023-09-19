import { ParallaxBanner } from "react-scroll-parallax";

const Banner = (props) => {
    return (
        <ParallaxBanner
            className={props.css}
            layers={[
                { image: props.photo, speed: -20 },
                { speed: -15, },
            ]}
        />

    );
};

export default Banner;