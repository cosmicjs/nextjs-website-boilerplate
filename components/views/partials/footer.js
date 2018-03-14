/**
*
* Header
*
*/

import React from 'react';
import Link from 'next/link'


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { footer, contactInfo, social } = this.props;
    return (
        <div>
             <footer id="footer" style={{ backgroundColor: '#f8f8f8', borderTop: '1px solid #e7e7e7', marginTop: '5%'}}>
            <div className="container">
                <div className="row">
                <div className="col-sm-8" style={{ marginTop: '50px' }}>
                    <label className="mb-20">Contact Us</label>
                    <br />
                    <br />
                    <label>Phone:</label>
                    <br />
                    <p>{contactInfo.phone}</p>
                    <label>Email:</label>
                    <br />
                    <p><a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a></p>
                    <label>Address:</label><br />
                    <div dangerouslySetInnerHTML={{__html: contactInfo.address}} />
                </div>
                <div className="col-sm-4" style={{ marginTop: '50px' }}>
                    <h4 className="mb-20">Connect</h4>
                    <div className="mb-20">
                        <br/>
                        <a className="mr-10" style={{ marginRight: '10px' }} href={social.facebook} target="_blank">
                            <i className="fa fa-facebook" style={{ fontSize: '26px' }}></i>
                        </a>
                        <a className="mr-10" style={{ marginRight: '10px' }} href={social.twitter} target="_blank">
                            <i className="fa fa-twitter" style={{ fontSize: '26px' }}></i>
                        </a>
                        <a className="mr-10" style={{ marginRight: '10px' }} href={social.google_plus} target="_blank">
                            <i className="fa fa-google-plus" style={{ fontSize: '26px' }}></i>
                        </a>
                    </div>
                    <br />
                    <div className="mb-20"> &copy; 2018 {footer.company_title}
                    </div>
                    <br />
                    <br />
                    <a href="https://cosmicjs.com" target="_blank">
                    <img className="pull-left mr-15 relative" src="https://cosmicjs.com/images/logo.svg" width="28" height="28" />
                    <span style={{ marginLeft: '10px', color: '#666' }} >Proudly powered by Cosmic JS</span>
                    </a>
                </div>
                </div>
            </div>
        </footer>
        </div>
    );
  }
}

export default Header;
