import React from 'react';
class AboutUs extends React.Component {
	render() {
        const { aboutUs } = this.props;
		return (
            <div>
            <div className="container">
                <p className="h2">{aboutUs.title}</p>
                <div dangerouslySetInnerHTML={{__html: aboutUs.content}} />
            </div>
        </div>
		);
	}
}

export default AboutUs;
