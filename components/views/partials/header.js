/**
*
* Header
*
*/

import React from 'react';
import Link from 'next/link'


class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { header, nav } = this.props;
    return (
        <div>
            <div className="container text-center">
                <a><img src={header.metadata.logo.url} alt=""  height="60px;" /></a>
            </div>
            <nav className="navbar navbar-default" >
                <div className="container-fluid" style={{ marginLeft: '25%' }}>
                    <div className="navbar-header">
                        <div className="container">
                            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>
                                <span className="icon-bar"></span>                        
                            </button>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav" >
                        {
                            !!nav.metafields && nav.metafields.map((navElement,index) => (
                                <li key={`nav_${index}`}>
                                    { 
                                        !navElement.children && 
                                            <Link href={navElement.value}><a>{navElement.title}</a></Link>
                                    }
                                    
                                    {!!navElement.children && <a className="dropdown-toggle" data-toggle="dropdown" href="#">{navElement.title}<span className="caret"></span></a>}
                                    {!!navElement.children && <ul className="dropdown-menu">
                                        {
                                            navElement.children.map((child, index) => 
                                                <li key={`child_${index}`}>
                                                    <Link href={child.value[0] == '/' ? child.value : '/'+ child.value}><a>{child.title}</a></Link>
                                                </li>
                                            )
                                        }
                                    </ul>}
                            
                                </li>
                            ))

                        }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
  }
}

export default Header;
