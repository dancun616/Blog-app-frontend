import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Posts() {
    const [posts, setPosts] = useState([]);
  
    useEffect(() => {
        async function fetchData() {
          const response = await fetch('https://example.com/posts');
          const data = await response.json();
          setPosts(data);
        }
        fetchData();
      }, []);
    
      return (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <img src={post.image} alt={post.title} />
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <p>By <Link to={`/authors/${post.authorId}`}>{post.authorName}</Link></p>
              <p>{post.about}</p>
              <Link to={`/posts/${post.id}/comments`}>Comments</Link>
            </div>
          ))}
        </div>
      );
    }
    
    export default Posts;
    