import React from 'react';
class Chicago extends React.Component {
	render() {
        const { chicago } = this.props;
		return (
            <div>
                <div class="container">
                        <h1>{chicago.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: chicago.content}} />
                </div>
            </div>
		);
	}
}

export default Chicago;
