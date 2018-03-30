import React from 'react';
class Faq extends React.Component {
	render() {
        const { faq } = this.props;
		return (
            <div className="container">
                <h1>{faq.title}</h1>
                {
                    !!faq.faqs && faq.faqs.map((f, index) => 
                        <div  key={`faq_${index}`}>
                            <h2>{f.title}</h2>
                            <p>{f.value}</p>
                        </div>
                    )
                }
            </div>
		);
	}
}

export default Faq;
