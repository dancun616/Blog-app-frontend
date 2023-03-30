import React, { useState } from 'react';

function Profile() {
    const [image, setImage] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [bio, setBio] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        // TODO: Send form data to backend API
      }

      function handleDelete() {
        fetch(`/api/users`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username }),
        })