import React from 'react';
class OnCare extends React.Component {
	render() {
        const { onCare } = this.props;
		return (
            <div>
                <div className="container">
                        <h1>{onCare.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: onCare.content}} />
                </div>
            </div>
		);
	}
}

export default OnCare;
