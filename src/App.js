import './style/App.css';
import Header from './components/Header'
import PostListing from './components/PostListing'
import SinglePost from './components/SinglePost'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'

function App() {
  const [postListing, setPostListing] = useState([]);

  useEffect(() => {
    const fetchingPosts = async () => {
      const res = await fetch('http://cloverlabs.io/wp-json/wp/v2/posts')
      const data = await res.json();
      console.log(data);
      setPostListing(data);
    }
    fetchingPosts();
  }, [])

  const singlePostHandler = (e) => {
    const currentUser = e.currentTarget.getAttribute('value');
    console.log(currentUser);
  } 

  return (
    <Router>
     <Header />
     <Route path='/' exact  render={(props) => (
       <>
       <PostListing 
          postListing={postListing}
          singlePost={singlePostHandler} 
       />
       </>
     )}/>
     {postListing.map((post) => (
        <Route key={post.id}  path={`/${post.id}`} render={(props) => (
          <>
          <SinglePost 
            title={post.title.rendered}
            content={post.content.rendered}
          />
          </>
        )}/>
     ))}
   

    </Router>
  );
}

export default App;
