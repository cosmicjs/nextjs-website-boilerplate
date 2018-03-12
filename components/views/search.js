import React from 'react';
import Link from 'next/link';
class Search extends React.Component {
	render() {
        const { searchResult, searchField, handleChange } = this.props;
		return (
            <div>
                <div className="container">
                    <div id="imaginary_container"> 
                        <h1>Search</h1>
                        <div className="form-group" >
                            <input type="text" value={searchField} className="form-control" onChange={handleChange} placeholder="Search" style={{ height: '44px' }} />
                        </div>
                    </div>
                    {
                        !!searchResult && searchResult.map((s, index) => 
                            <div key={`search_${index}`}>
                                <h2>
                                    {s.title}
                                </h2> 
                                <p>
                                    {s.teaser}
                                </p>
                                <div>
                                    <Link href={s.permalink}><a>Read more</a></Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
		);
	}
}

export default Search;
