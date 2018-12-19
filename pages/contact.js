import React from 'react';

import { mapGlobals } from 'utils/helperFuncs';
import Head from 'next/head';
import Meta from 'components/widgets/Meta';
import Contact from 'components/views/contact'
import Header from 'components/views/partials/header'
import Footer from 'components/views/partials/footer'
import Request from 'utils/request';

class ContactPage extends React.Component {

  static async getInitialProps({ req, query }) {
    const Response = await Request.getGlobals();
    const contactResponse = await Request.getObject('contact');
    const contact = contactResponse.object;
    const globals = mapGlobals(Response.objects);
    return { globals, contact };
  }

  constructor(props){
    super(props);
    this.state = {
        header: props.globals.header,
        contact_form: props.globals.contact_form,
        nav: props.globals.nav,
        social: props.globals.social,
        contactInfo: props.globals.contact_info.metadata,
        footer: props.globals.footer,
        contact: props.contact,
        form: {
            name: '',
            email: '',
            phone: '',
            message: ''
        },
        form_validation: {
            name: false,
            email: false,
            message: false
        },
        form_status:{
            status: '',
            message: ''
        }
    }
  }

  handleChange = (event) => 
  {
      let name = event.target.name;
      let value = event.target.value;
      let form = this.state.form;
      form[name] = value;
      this.setState({form});
  }

  validateForm = () => {
    var check = true;
    var form_validation = this.state.form_validation
    form_validation.name = !this.state.form.name ? true : false;
    form_validation.email = !this.state.form.email ? true : false;
    form_validation.message = !this.state.form.message ? true : false;
    if(!this.state.form.name || !this.state.form.email || !this.state.form.message)
    {
        check = false;
    }
    this.setState({form_validation});
    return check;
  }
    submitForm = async () => {
        var form_status = this.state.form_status;
        form_status.status = '';
        form_status.message = '';
        this.setState({ form_status });
        if (this.validateForm()) {
            var response = await Request.contactForm(this.state.form, this.state.contact_form);
            if (response.status) {
                form_status.status = 'success';
                form_status.message = response.message
                var form = this.state.form;
                var form_validation = this.state.form_validation;
                form.name = '';
                form.email = '';
                form.phone = '';
                form.message = '';
                form_validation.name = false;
                form_validation.email = false;
                form_validation.message = false;
                this.setState({ form, form_validation });
            }
            else {
                form_status.status = 'error';
                form_status.message = response.message
            }
            this.setState({ form_status });
        }
    }

	render() {
		return (
      <Meta>
        <Head>
          <title>Medical Professional ~ Cosmic JS Next Js App</title>
          <meta name="description" content={ this.state.contact.metadata.seo_description.value } />
          <link rel="icon" type="image/png" href={`${this.state.header.metadata.favicon.imgix_url}?w=32`} sizes="32x32" />
          <link rel="icon" type="image/png" href={`${this.state.header.metadata.favicon.imgix_url}?w=16`} sizes="16x16" />
        </Head>
        <Header header={this.state.header} nav={this.state.nav} />
        <Contact formStatus={this.state.form_status} handleChange={this.handleChange} submitForm={this.submitForm} form={this.state.form} formValidation={this.state.form_validation} contact={this.state.contact}></Contact>
        <Footer footer={this.state.footer} social={this.state.social} contactInfo={this.state.contactInfo} />
      </Meta>
		);
	}
}

export default ContactPage;