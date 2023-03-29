import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Author({ authorId }) {
    const [author, setAuthor] = useState({});

    useEffect(() => {
        let isMounted = true;
        async function fetchData() {
            
