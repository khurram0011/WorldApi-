import React from 'react';
import './Contact.css';

const Contact = () => {
    const handleFormControl = (formData) => {
        const inputFormData = Object.fromEntries(formData.entries()); // Correct capitalization of Object
        console.log(inputFormData);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        handleFormControl(formData);
    };
    
    return (
        <div className="contact-page">
            <h1>Contact Us</h1>
            <form className="contact-form" onSubmit={handleSubmit}>
                {/* Name Input */}
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input autoComplete='false' name="user-name" type="text" id="name" placeholder="Enter your name" required />
                </div>

                {/* Email Input */}
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" name="email"  autoComplete='false' placeholder="Enter your email" required />
                </div>

                {/* Message Textarea */}
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" autoComplete='fasle' rows="5" placeholder="Enter your message" required></textarea>
                </div>

                {/* Submit Button */}
                <button type="submit" value='send' className="submit-btn">Send Message</button>
            </form>
        </div>
    );
};

export default Contact;
