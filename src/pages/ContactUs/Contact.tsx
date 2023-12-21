import './Contact.css'

function Contact() {
    return (
        <div className="Contact">
            <h1 id="contact-header">CONTACT US</h1>
            <p>For reservations and orders, feel free to give us a call at <span className='Bold'>763-123-4567</span></p>
            <p>For all other inquiries, please fill out the form below.</p>
            <form action="">
                <div className="form-section">
                    <input type="text" placeholder='First Name' />
                    <input type="text" placeholder='Last Name' />
                </div>
                <div className="form-section">
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Phone (Optional)' />
                </div>
                <input id="subject-input" type="text" placeholder='Subject' />
                <textarea placeholder='Enter your message ...'></textarea>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Contact