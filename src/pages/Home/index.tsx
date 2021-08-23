import HeroImage from '../../media/Hero.jpg';
import { Hero } from './Hero';
import { ContactUs } from './ContactUs';
export const Home: React.FC = () => {
    return (
        <div className='home'>
            <Hero />
            <ContactUs />
        </div>
    );
};
