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

      return (
        <div>
          <h2>Comments</h2>
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.user}: {comment.text}</p>
            </div>
          ))}
        </div>
      );
    }
    
    export default Comments;
    