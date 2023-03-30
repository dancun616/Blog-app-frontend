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
        .then(response => {
            if (response.ok) {
              // TODO: Handle successful delete
            } else {
              // TODO: Handle error deleting user
            }
          })
          .catch(error => {
            // TODO: Handle error
          });
      }

      function handleUpdate() {
        const data = {
          image,
          username,
          email,
          bio,
        };  
        fetch(`/api/users`, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          })
            .then(response => {
              if (response.ok) {
                // TODO: Handle successful update
              } else {
                // TODO: Handle error updating user
              }
            })
            .catch(error => {
              // TODO: Handle error
            });
        } 

        return (
            <div>
              <h2>User Profile</h2>
              <form onSubmit={handleSubmit}>
                <label>
                  Image URL:
                  <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
                </label>
                <br />
                <label>
                  Username:
                  <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <br />
                <label>
                  Email:
                  <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <br />
                <label>
                  Bio:
                  <textarea value={bio} onChange={(e) => setBio(e.target.value)} />
                </label>
                <br />