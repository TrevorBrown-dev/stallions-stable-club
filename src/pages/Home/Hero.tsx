import { Calendar } from '../../components/Calendar';
import { ContactForm } from '../../components/ContactForm';
import { SocialBar } from '../../components/SocialBar';
import { TheStableClubLogo } from '../../components/svgs/TheSableClubLogo';
export const Hero: React.FC = () => {
    return (
        <div className='hero crop'>
            <div className="hero-container">
                <div className="hero-content">
                    <div className="h-logo">
                        <div className="center-content">

                            <TheStableClubLogo />
                        </div>
                    </div>
                    {/* <div className="h-social">
                        <SocialBar />
                    </div> */}
                    <div className="h-tag center-content" style={{ padding: '1em' }}>
                        <h1>Your Tagline!</h1>
                    </div>
                    <div className="h-desc">
                        <p style={{ margin: '0 auto' }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere beatae quo molestias, dignissimos nemo deserunt molestiae officia atque ut voluptatum libero fugit animi, eius doloremque? Eveniet, laborum ratione. Molestiae provident obcaecati minima. Dolore et fuga architecto distinctio natus. Ullam, doloribus?</p>
                    </div>
                    {/* <div className="h-contact">
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
                    </div> */}
                    <div className="h-form">

                        <Calendar />
                        {/* <ContactForm /> */}

                    </div>
                </div>
            </div>
        </div>
    );
};
