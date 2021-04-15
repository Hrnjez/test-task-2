import { Link } from 'react-router-dom'

const SinglePost = ({ title, content }) => {
    const regex = /(<([^>]+)>)/ig;
    const result = content.replace(regex, '');
    return (
        <div className='single-post'>
            <Link className='btn' to='/' >Back</Link> 
                <div className="single-post-header">
                    <div className="single-post-img"></div>
                    <div className="single-post-title">
                        <h1>{title}</h1>
                        <div className="title-icons">Share: <i className="fab fa-facebook-f"></i> <i className="fab fa-linkedin-in"></i></div>
                    </div>
                </div>
                <div className="single-post-content">
                    <p>{result}</p>
                </div>
                <Link className='btn' to='/'>Back</Link> 
        </div>
    )
}

export default SinglePost
