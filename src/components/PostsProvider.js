import { useState } from 'react';
import PostsContext from '../contexts/PostsContext';

export default function PostsProvider(props) {
  const [posts, setPosts] = useState([]);

  const handlePosts = (data) => {
    setPosts(data);
  }

  return (
    <PostsContext.Provider value={{ handlePosts, posts }}>
      {props.children}
    </PostsContext.Provider >
  )
}
