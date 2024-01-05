import { Slide } from 'react-slideshow-image';
import './herosection.css'
import 'react-slideshow-image/dist/styles.css';

const HeroSection = () => {

    return (
        <Slide>
            <div className='Container__Parent'>
              <div className='Container__Hero'>


                <div>
                <h1>Digital Design Awards</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia atque quo doloribus nobis sapiente eaque dolore nostrum quibusdam culpa rerum.</p>
                <button>Learn More</button>
                </div>


                <div>
                    <ul>
                        <li><a href="">Fa</a></li>
                        <li><a href="">Fa</a></li>
                        <li><a href="">Fa</a></li>

                    </ul>
                </div>
                
              </div>
            </div>
        </Slide>
    );
};

export default HeroSection;