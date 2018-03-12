import React from 'react';
class Speciality extends React.Component {
	render() {
        const { speciality } = this.props;
		return (
            <div>
                <div class="container">
                        <h1>{speciality.title}</h1>
                        <div dangerouslySetInnerHTML={{__html: speciality.content}} />
                </div>
            </div>
		);
	}
}

export default Speciality;
