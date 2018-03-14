import React from 'react';

import { mapGlobals } from 'utils/helperFuncs';
import Head from 'next/head';
import Meta from 'components/widgets/Meta';
import Search from 'components/views/search'
import Header from 'components/views/partials/header'
import Footer from 'components/views/partials/footer'
import Request from 'utils/request';

class SearchPage extends React.Component {
  static async getInitialProps({ req, query }) {
    const Response = await Request.getGlobals();
    const bucketResponse = await Request.getObjects();
    const searchResponse = await Request.getObject('search');
    const bucket = bucketResponse.objects;
    const search = searchResponse.object;
    const globals = mapGlobals(Response.objects);
    return { globals, bucket, search };
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
        bucket: props.bucket,
        searchResult: '',
        searchField: '',
        search: props.search
    }
  }

  handleChange = (event) => {
    let value = event.target.value;
    let searchField = this.state.searchField;
    searchField = value;
    this.setState({searchField});
    let objects = this.state.bucket;
    let searchResult = this.state.searchResult;
    let search_results = [];
    let query = value;
    if(!!query)
    {
      objects.forEach(object => {
        if(object.title.toLowerCase().indexOf(query) !== -1 || object.content.toLowerCase().indexOf(query) !== -1){
          object.teaser = object.content.replace(/(<([^>]+)>)/ig,"").substring(0, 300)
          if (object.type_slug === 'blogs')
                object.permalink = '/blog/' + object.slug
              else
                object.permalink = '/' + object.slug
                search_results.push(object)
        }
        if (!_.find(search_results, { _id: object._id })) {
          object.metafields.forEach(metafield => {
            if(metafield.value.toLowerCase().indexOf(query) !== -1 && !_.find(search_results, { _id: object._id })) {
              object.teaser = object.content.replace(/(<([^>]+)>)/ig,"").substring(0, 300)
              if (object.type_slug === 'blogs')
                object.permalink = '/blog/' + object.slug
              else
                object.permalink = '/' + object.slug
                search_results.push(object)
            } 
          })
        }
      });
    }
    searchResult = search_results;
    this.setState({searchResult});
  }

	render() {
		return (
      <Meta>
        <Head>
          <title>Medical Professional ~ Cosmic JS Next Js App</title>
          <meta name="description" content={ this.state.search.metadata.seo_description.value } />
          <link rel="icon" type="image/png" href={`${this.state.header.metadata.favicon.imgix_url}?w=32`} sizes="32x32" />
          <link rel="icon" type="image/png" href={`${this.state.header.metadata.favicon.imgix_url}?w=16`} sizes="16x16" />
        </Head>
        <Header header={this.state.header} nav={this.state.nav} />
        <Search handleChange={this.handleChange} searchField={this.state.searchField} searchResult={this.state.searchResult}></Search>
        <Footer footer={this.state.footer} social={this.state.social} contactInfo={this.state.contactInfo} />
      </Meta>
		);
	}
}

export default SearchPage;
