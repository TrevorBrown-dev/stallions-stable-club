import { useContext } from 'react';
import { useState } from 'react';
import { MessageContext } from '../../contexts/MessageContext';
import { useEmail } from '../../models/email';

// interface ContactFormProps {

// }

//There will eventually be two types of forms
export interface ContactFormData {
    firstName: string;
    lastName: string;
    email: string;
    dates: string;
    message: string;
}

//The default values for the form
const blankForm: ContactFormData = { firstName: '', lastName: '', email: '', dates: '', message: '' };
export const ContactForm: React.FC = () => {
    const send = useEmail();

    const msg = useContext(MessageContext);

    const [formData, setFormData] = useState<ContactFormData>(blankForm);
    const handleInputChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (event) => {
        setFormData((oldForm) => ({ ...oldForm, [event.target.name]: event.target.value }));
    };

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        console.log(formData);
        console.log(msg);
        msg?.setMessage({ message: 'We will get back to you shortly.', title: `Thank you ${formData.firstName}!` });

        send(formData);

        setFormData(blankForm);
    };
    return (
        <form action='post' onSubmit={handleSubmit} className='contact-form'>
            <fieldset className='contact-fieldset'>
                <legend className='center-text'>
                    <h2>Book an Event Today!</h2>
                </legend>
                <div className='contact-grid'>
                    <label htmlFor='first-name'>
                        <h4 className='fill'>Name: </h4>
                    </label>
                    <input name='firstName' value={formData['firstName']} onChange={handleInputChange} id='first-name' type='text' className='left' placeholder='First' />
                    <input name='lastName' value={formData['lastName']} id='last-name' onChange={handleInputChange} type='text' className='right' placeholder='Last' />

                    <h4 className='fill'>Email: </h4>
                    <input name='email' value={formData['email']} type='email' onChange={handleInputChange} className='fill' placeholder='example@gmail.com' />
                    <h4 className='fill'>Date: </h4>
                    <input name='dates' type='date' value={formData['dates']} onChange={handleInputChange} className='fill' />

                    <h4 className='fill'>Comment or Message: </h4>
                    <textarea name='message' id='contact-message' value={formData['message']} onChange={handleInputChange} className='fill' placeholder='Hello!'></textarea>
                    <button className='fill'>Submit</button>
                </div>
            </fieldset>
        </form>
    );
};
