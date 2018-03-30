import React from 'react';
class Page extends React.Component {
	render() {
        const { page } = this.props;
		return (
            <div>
                <div className="container">
                        <h1>{page.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: page.content}} />
                </div>
            </div>
		);
	}
}

export default Page;