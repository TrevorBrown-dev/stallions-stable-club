import moment from 'moment';
import { SocialBar } from '../SocialBar';

export const Footer: React.FC = () => {
    return (
        <footer className='footer' id='contact-us'>
            <div className='center-content social'>
                <SocialBar />
            </div>
            <div className='h-contact'>
                <div className='center-grid-justified' style={{ paddingBottom: '.5em' }}>
                    <div className='left' style={{ marginRight: '2em' }}>
                        <h5>Address</h5>
                    </div>
                    <div className='right' style={{ marginLeft: '2em' }}>
                        <h5>Contact</h5>
                    </div>
                </div>
                <address>
                    <div className='center-grid-justified'>
                        <div className='left'>
                            <a href='https://goo.gl/maps/3GqZtuYrsxWh9WYN8'>
                                Cantine Veteran’s Memorial Sports Complex
                                <br />
                                Pavilion St, Saugerties, NY 12477
                            </a>
                        </div>
                        <div className='right' style={{ marginLeft: '1em' }}>
                            <a href='tel:+18457070265'>
                                <strong>Phone: </strong>
                                (845) 707-0265
                            </a>
                            <br />
                            <a href='mailto:info@thestableatcantine.com'>
                                <strong>Email: </strong>
                                info@thestableatcantine.com
                            </a>
                        </div>
                    </div>
                </address>
            </div>
            <div className="copyright">
                &copy; {moment().year()} — The Stable Club. All rights reserved.
            </div>
        </footer>
    );
};
