import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Author({ authorId }) {
    const [author, setAuthor] = useState({});

    useEffect(() => {
        let isMounted = true;
        async function fetchData() {
            try {
                const response = await fetch(`https://example.com/authors/${authorId}`);
                const data = await response.json();
                if (isMounted) {
                  setAuthor(data);
                }
              } catch (error) {
                console.error('Error fetching author:', error);
              }
            }
            fetchData();
            return () => {
              isMounted = false;
            };
          }, [authorId]);
      
    const { name, bio, image } = author;

  return (
    <div>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{bio}</p>
      <Link to={`/authors/${authorId}/posts`}>View Posts</Link>
    </div>
  );
}

export default Author;

