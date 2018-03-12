import React from 'react';
class NewYork extends React.Component {
	render() {
        const { newYork } = this.props;
		return (
            <div>
                <div class="container">
                        <h1>{newYork.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: newYork.content}} />
                </div>
            </div>
		);
	}
}

export default NewYork;
