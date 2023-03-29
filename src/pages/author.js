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
