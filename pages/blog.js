import React from 'react';
import Router from 'next/router';

import { mapGlobals } from 'utils/helperFuncs';
import Head from 'next/head';
import Meta from 'components/widgets/Meta';
import Blog from 'components/views/blog'
import Header from 'components/views/partials/header'
import Footer from 'components/views/partials/footer'
import Request from 'utils/request';

class BlogPage extends React.Component {

  static async getInitialProps({ req, query }) {
    const Response = await Request.getGlobals();
    const blogResponse = await Request.getBlogs();
    const blogPageResponse = await Request.getObject('blog');
    const blogPage = blogPageResponse.object;
    let blog = '';
    if(!!query.slug)
    {
        const blogRes = await Request.getObject(query.slug);
        blog = blogRes.object;
    }
    const blogs = blogResponse.objects;
    const globals = mapGlobals(Response.objects);
    return { globals, blogs, blog, blogPage };
  }

  constructor(props){
    super(props);
  }

	render() {
    return (
      <Meta>
        <Head>
          <title>Medical Professional ~ Cosmic JS Next Js App</title>
          <meta name="description" content={ this.props.blogPage.metadata.seo_description.value } />
          <link rel="icon" type="image/png" href={`${this.props.globals.header.metadata.favicon.imgix_url}?w=32`} sizes="32x32" />
          <link rel="icon" type="image/png" href={`${this.props.globals.header.metadata.favicon.imgix_url}?w=16`} sizes="16x16" />
        </Head>
        <Header header={this.props.globals.header} nav={this.props.globals.nav} />
        <Blog blogs={this.props.blogs} blog={this.props.blog}></Blog>
        <Footer footer={this.props.globals.footer} social={this.props.globals.social} contactInfo={this.props.globals.contact_info.metadata} />
      </Meta>
		);
	}
}

export default BlogPage;
