import { ParallaxBanner } from "react-scroll-parallax";

const Parallax = (img) => {
    return (
        <ParallaxBanner
            className={img}
            layers={[
                { image: BO, speed: -20 },
                { speed: -15, },
            ]}
        />

    )
};

export default Parallax;