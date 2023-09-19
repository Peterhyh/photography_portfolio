import BO from '../app/assets/img/Bo.jpg';
import Header from '../components/Header';
import NOODLES from '../app/assets/img/Noodles.jpg';
import GARDEN from '../app/assets/img/japanese-tea-garden-1.jpg';
import Banner from '../components/Banner';
import NORI from '../app/assets/img/Nori.jpg';


const HomePage = () => {

    return (
        <div >
            <Banner
                css='bg-container'
                photo={GARDEN}
                content={(
                    <Header />
                )}
            />
            <div className='home-second-section'>
                <Banner
                    css='noodles-pic'
                    photo={NOODLES}
                    content={
                        (<div className='preset-title-container'>
                            <div>
                                <p>LIGHTROOM PRESETS</p>
                                <h1>
                                    <a href='/'>SHOP PRESETS →</a>
                                </h1>
                            </div>
                        </div>)}
                />
                <Banner css='nori-pic' photo={NORI} />
            </div >
            <Banner
                css='bo-pic'
                photo={BO}
                content={(
                    <div className='preset-title-container'>
                        <div>
                            <p>LIMITED EDITION PRINTS</p>
                            <h1>
                                <a href='/'>SHOP PRINTS →</a>
                            </h1>
                        </div>
                    </div>
                )} />
        </div >


    )
};

export default HomePage;