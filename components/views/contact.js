import React from 'react';
class Faq extends React.Component {
	render() {
        const { contact, form, formValidation, submitForm, handleChange, formStatus } = this.props;
		return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6">
                        <p className="h2">{contact.title}</p>
                        <div dangerouslySetInnerHTML={{__html: contact.content}} />
                    </div>
                    <div className="col-sm-6">
                            <div className={`form-group ${formValidation.name ? 'has-error' : ''}`}>
                                <label htmlFor="name">Name</label>
                                <input type="text" value={form.name} onChange={handleChange} placeholder="Ener your full name" name="name" className="form-control" />
                            </div>
                            <div className={`form-group ${formValidation.email ? 'has-error' : ''}`}>
                                <label htmlFor="email">Email</label>
                                <input type="email" value={form.email} onChange={handleChange} placeholder="Enter your email address" name="email" className="form-control" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="phone">Phone (Optional)</label>
                                <input type="text" value={form.phone} onChange={handleChange} placeholder="Enter your phone number" name="phone" className="form-control" />
                            </div>
                            <div className={`form-group ${formValidation.message ? 'has-error' : ''}`}>
                                <label htmlFor="message">Message</label>
                                <textarea name="message" value={form.message} onChange={handleChange} className="form-control" placeholder="Enter a message" id="" cols="10" rows="5"></textarea>
                            </div>
                            {
                                formStatus.status == 'success' &&
                                <div className="alert alert-success success-message">
                                    { formStatus.message }
                                </div>
                            }
                            {
                                formStatus.status == 'error' &&
                                <div className="alert alert-danger error-message">
                                    { formStatus.message }
                                </div>
                            }
                            <a className="btn btn-primary" onClick={() => submitForm()}>Submit</a>
                    </div>
                </div>
            </div>
		);
	}
}

export default Faq;
