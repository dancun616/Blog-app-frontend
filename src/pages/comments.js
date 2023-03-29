import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Comments() {
    const { postId } = useParams();
    const [comments, setComments] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const response = await fetch(`https://example.com/posts/${postId}/comments`);
          const data = await response.json();
          setComments(data);
        }
        fetchData();
      }, [postId]);