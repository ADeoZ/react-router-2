import Post from './Post';
// import useJsonFetch from '../hooks/useJsonFetch';
import { useContext, useEffect } from 'react';
import PostsContext from '../contexts/PostsContext';

export default function Main({ history }) {
  // const [posts] = useJsonFetch(process.env.REACT_APP_POSTS_URL);
  
  const { handlePosts, posts } = useContext(PostsContext);
  useEffect(() => {
    fetch(process.env.REACT_APP_POSTS_URL)
      .then((response) => response.json())
      .then((result) => handlePosts(result))
  }, []);

  const handleAdd = () => {
    history.push('/posts/new');
  }

  return (
    <div className="Main">
      <div className="Main__header">
        <button className="Main__addpost" onClick={handleAdd}>Создать пост</button>
      </div>
      {posts && posts.map((post) =>
        <Post key={post.id} post={post} />
      )}
    </div>
  );
}