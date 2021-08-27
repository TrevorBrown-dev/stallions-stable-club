import { Hero } from './Hero';
import { ContactUs } from './ContactUs';
export const Home: React.FC = () => {
    return (
        <main className='home'>
            <Hero />
            <ContactUs />
        </main>
    );
};
