import { ContactForm } from '../../components/ContactForm';
import { OverlayedImage } from '../../components/OverlayedImage';
import { TheStableClubLogo } from '../../components/svgs/TheSableClubLogo';
import HeroImage from '../../media/Hero.jpg';
export const Hero: React.FC = () => {
    return (
        <div className='hero'>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="h-logo">
                        <TheStableClubLogo />
                    </div>
                    <div className="h-tag center-content" style={{ padding: '1em' }}>
                        <h1>Your Tagline!</h1>
                    </div>
                    <div className="h-desc">
                        <p style={{ margin: '0 auto' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere beatae quo molestias, dignissimos nemo deserunt molestiae officia atque ut voluptatum libero fugit animi, eius doloremque? Eveniet, laborum ratione. Molestiae provident obcaecati minima. Dolore et fuga architecto distinctio natus. Ullam, doloribus?</p>
                    </div>
                    <div className="h-contact">
                        <div className="center-grid-justified" style={{ paddingBottom: '.5em' }}>
                            <div className="left" style={{ textAlign: 'center' }}>
                                <h5>Address</h5>
                            </div>
                            <div className="right" style={{ textAlign: 'center', marginLeft: '1em' }}>
                                <h5>Contact</h5>
                            </div>
                        </div>
                        <address>
                            <div className="center-grid-justified">
                                <div className="left">
                                    <a href="https://goo.gl/maps/3GqZtuYrsxWh9WYN8">
                                        Cantine Veteran’s Memorial Sports Complex<br />
                                        Pavilion St, Saugerties, NY 12477
                                    </a>

                                </div>
                                <div className="right" style={{ marginLeft: '1em' }}>
                                    <a href="tel:+18457070265">
                                        <strong>Phone: </strong>
                                        (845) 707-0265</a><br />
                                    <a href="mailto:info@thestableatcantine.com">
                                        <strong>Email: </strong>
                                        info@thestableatcantine.com</a>
                                </div>
                            </div>
                        </address>
                    </div>
                    <div className="h-form">
                        <div className="contact-form-container">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
