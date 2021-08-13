import { OverlayedImage } from '../../components/OverlayedImage';
import { TheStableClubLogo } from '../../components/svgs/TheSableClubLogo';
import HeroImage from '../../media/Hero.jpg';
export const Hero: React.FC = () => {
    return (
        <div className='hero'>
            <div className='logo-container'>
                <div className='logo'>
                    <TheStableClubLogo />
                </div>
            </div>
            <OverlayedImage src={HeroImage} alt='The Stable Club' />
        </div>
    );
};
