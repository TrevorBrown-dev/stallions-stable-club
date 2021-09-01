import { Calendar } from '../../components/Calendar';
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
                        <div className='h-tag' style={{ fontSize: '.7em' }}>
                            <h1>Sports Bar</h1>
                        </div>
                        <div className='h-desc'>
                            <p>The Stable Club is a private member bar located at Cantine Field. The Stable includes a VIP party deck over center field for great viewing of all Stallions games.</p>
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
