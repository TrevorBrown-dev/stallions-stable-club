import HeroImage from '../../media/Hero.jpg';
import { Hero } from './Hero';
import { Testimonials } from './Testimonials';
export const Home: React.FC = () => {
    return (
        <div className="home">
            <Hero />
            <Testimonials />
        </div >
    );
};
