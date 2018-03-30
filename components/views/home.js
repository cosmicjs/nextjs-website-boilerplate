import React from 'react';
import Link from 'next/link'
class Home extends React.Component {
	render() {
        const { home } = this.props;
		return (
            <div>
               <div id="myCarousel" className="carousel slide" data-ride="carousel" style={{ marginTop: '-20px' }}>
                <ol className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner" >
                {
                    !!home.carousel && home.carousel.map((item,index) => (
                        <div key={`carousel_${index}`} className={`item ${index===0 && 'active'}`} style={{ background: `url(${item.url})`, height: '500px', width: '100%', backgroundSize:'cover', backgroundPosition:'center' }}>
                        </div>
                    ))
                }
                </div>

                <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="right carousel-control" href="#myCarousel" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <div className="container-fluid">
        <div className="row">
            <div className="col-sm-12 text-center" style={{ marginTop: '30px', marginBottom: '50px' }}>
                <p className="h1">{home.headline.value}</p>
                <p className="h4">{home.subheadline.value}</p>
            </div>
        </div>
        <div className="row">
            <div className="container col-xs-12">
            {
                !!home.blurbs && home.blurbs.map((blurb, index) => 
                    <div key={`blurb_${index}`} className="col-sm-4 text-center">
                        <div className="h3" style={{ marginBottom: '30px' }}>{blurb.value}</div>
                        <div className="img-circle center-block" style={{ background: `url(${`https://s3-us-west-2.amazonaws.com/cosmicjs/${blurb.children[0].value}`})`, backgroundSize:'cover', height: '300px', width: '300px' }}>
                        </div>
                        <div style={{ marginTop: '30px' }}>
                            {blurb.children[1].value}
                        </div>
                    </div>
                )
            }
            </div>
        </div>
        <div className="row" style={{ marginTop: '30px' }}>
            <div className="col-sm-12 text-center" style={{ marginTop: '50px' }}>
                <p className="h1">{home.call_to_action_text.value}</p>
                <p className="h4">{home.call_to_action_subtext.value}</p>
                <br />
                <Link href="/contact" ><a className="btn btn-default">{home.call_to_action_button_text.value}</a></Link>
            </div>
        </div>
            </div>
            </div>
		);
	}
}

export default Home;
