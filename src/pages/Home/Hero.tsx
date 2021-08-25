import { Calendar } from '../../components/Calendar';
import { ContactForm } from '../../components/ContactForm';
import { SocialBar } from '../../components/SocialBar';
import { TheStableClubLogo } from '../../components/svgs/TheSableClubLogo';
export const Hero: React.FC = () => {
    return (
        <header className='hero crop'>
            <div className='hero-container'>
                <div className='hero-content'>
                    <div className='left-column'>
                        <div className='h-logo'>
                            <TheStableClubLogo />
                        </div>
                        {/* <div className="h-social">
                        <SocialBar />
                    </div> */}
                        <div className='h-tag'>
                            <h1>Your Tagline!</h1>
                        </div>
                        <div className='h-desc'>
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere beatae quo molestias, dignissimos nemo deserunt molestiae officia atque ut voluptatum libero fugit
                                animi, eius doloremque? Eveniet, laborum ratione. Molestiae provident obcaecati minima. Dolore et fuga architecto distinctio natus. Ullam, doloribus?
                            </p>
                        </div>
                    </div>
                    <div className='right-column'>
                        <div className='h-form'>
                            <Calendar />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};
