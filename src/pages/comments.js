import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function Comments() {
    const { postId } = useParams();
    const [comments, setComments] = useState([]);