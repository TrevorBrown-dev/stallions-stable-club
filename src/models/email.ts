import { useCallback, useEffect } from 'react';
import { init, send } from 'emailjs-com';
import axios from 'axios';
import { ContactFormData } from '../components/ContactForm';

export const useEmail = () => {
    useEffect(() => {
        init('user_j0ic49hl7EFPe9IulXwIV');
    }, []);

    const sendEmail = useCallback((data: ContactFormData) => {
        //We know this works, lets turn it off to save our free emails.
        // send('service_x8t09om', 'template_chs9bqb', data as unknown as Record<string, unknown>);
        console.log(data);
    }, []);

    return sendEmail;
};
