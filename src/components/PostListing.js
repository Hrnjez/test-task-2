import Post from './Post'

const PostListing = ({ postListing, singlePost }) => {
    return (
        <div className='post-listing'>
           {postListing.map((post) => (
            <Post 
                key={post.id} 
                title={post.title.rendered}
                content={post.content.rendered}
                singlePost={singlePost}
                id={post.id}
            /> 
           ))} 
        </div>
    )
}

export default PostListing

