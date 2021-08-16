import { MessageProps } from '../contexts/MessageContext';

export const MessagePopup: React.FC<MessageProps & { closingSpeed: number }> = ({ title, message, closingSpeed }) => {
    return (
        <div className='message-popup'>
            {title && <h6 className='title'>{title}</h6>}
            <span className='content'>{message}</span>
            <div className='countdown' style={{ animationDuration: `${closingSpeed - 1000}ms`, animationDelay: '1s' }}>
                {' '}
            </div>
        </div>
    );
};
