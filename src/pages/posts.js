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
    