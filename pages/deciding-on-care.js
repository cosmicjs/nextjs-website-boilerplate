import React from 'react';
import Router from 'next/router';

import { mapGlobals } from 'utils/helperFuncs';
import Head from 'next/head';
import Meta from 'components/widgets/Meta';
import OnCare from 'components/views/on-care'
import Header from 'components/views/partials/header'
import Footer from 'components/views/partials/footer'
import Request from 'utils/request';

class DecidingOnCarePage extends React.Component {

  static async getInitialProps({ req, query }) {
    const Response = await Request.getGlobals();
    const onCareResponse = await Request.getObject('deciding-on-care');
    const onCare = onCareResponse.object;
    const globals = mapGlobals(Response.objects);
    return { globals, onCare };
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
        onCare: props.onCare
    }
  }

	render() {
		return (
      <Meta>
        <Head>
          <title>Medical Professional ~ Cosmic JS Next Js App</title>
          <meta name="description" content={ this.state.onCare.metadata.seo_description.value } />
          <link rel="icon" type="image/png" href={`${this.state.header.metadata.favicon.imgix_url}?w=32`} sizes="32x32" />
          <link rel="icon" type="image/png" href={`${this.state.header.metadata.favicon.imgix_url}?w=16`} sizes="16x16" />
        </Head>
        <Header header={this.state.header} nav={this.state.nav} />
        <OnCare onCare={this.state.onCare}></OnCare>
        <Footer footer={this.state.footer} social={this.state.social} contactInfo={this.state.contactInfo} />
      </Meta>
		);
	}
}

export default DecidingOnCarePage;
