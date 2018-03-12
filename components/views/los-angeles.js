import React from 'react';
class LosAngeles extends React.Component {
	render() {
        const { losAngeles } = this.props;
		return (
            <div>
                <div class="container">
                        <h1>{losAngeles.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: losAngeles.content}} />
                </div>
            </div>
		);
	}
}

export default LosAngeles;
