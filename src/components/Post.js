import { Link } from 'react-router-dom'

const Post = ({ title, content, singlePost, id }) => {

    const regex = /(<([^>]+)>)/ig;
    const result = content.replace(regex, '');
    return (
        <div className='post' onClick={singlePost} value={id}>
            <div className='post-img'></div>
            <div className="post-content">
                <h2 >{title}</h2>
                <p>{result}</p>
                <Link to={`/${id}`} className="btn">Read More</Link>
            </div>
        </div>
    )
}

export default Post
