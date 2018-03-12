import React from 'react';
import {Link} from 'routes';
class Chicago extends React.Component {
	render() {
        const { blogs, blog } = this.props;
		return (
            <div>
               <div className="container">
                    {
                        !!blog &&
                        <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">{blog.title}</h1>
                            <img src={blog.metadata.author.metadata.image.url} alt="Avatar" className="img-circle" height="20px;" width="20px;" />
                            <span className="card-subtitle text-muted" style={{ marginLeft: '10px' }}>{blog.metadata.author.title}   Wed, Sep 28 2016</span>
                        </div>
                        <div className="row" style={{ marginTop: '20px' }}>
                            <div className="col-sm-2">
                            </div>
                            <div className="col-sm-8">
                                <img src={blog.metadata.hero.url} width="100%" height="500px;" alt="Photo of sunset" />
                            </div>
                            <div className="col-sm-2">
                            </div>
                        </div>
                        <div className="card-body" style={{ marginTop: '20px' }}>
                            <div dangerouslySetInnerHTML={{__html: blog.content}} />
                        </div>
                    </div>
                    }
                    {
                        !blog && !!blogs && blogs.map((blog_item, index) =>
                            <div className="card" key={`blog_${index}`}>
                                <div className="card-body">
                                    <h1 className="card-title">{blog_item.title}</h1>
                                    <img src={blog_item.metadata.author.metadata.image.url} alt="Avatar" className="img-circle" height="20px;" width="20px;" />
                                    <span className="card-subtitle text-muted" style={{ marginLeft: '10px' }}>{blog_item.metadata.author.title}   Wed, Sep 28 2016</span>
                                </div>
                                <div className="row" style={{ marginTop: '20px' }}>
                                    <div className="col-sm-2">
                                    </div>
                                    <div className="col-sm-8">
                                        <img src={blog_item.metadata.hero.url} width="100%" height="500px;" alt="Photo of sunset" />
                                    </div>
                                    <div className="col-sm-2">
                                    </div>
                                </div>
                                <div className="card-body" style={{ marginTop: '20px' }}>
                                    <p className="card-text">{blog_item.metadata.teaser}</p>
                                    <Link route={`/blog/${blog_item.slug}` }>
                                        <a>Read more...</a>
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
		);
	}
}

export default Chicago;
