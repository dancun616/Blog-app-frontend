import React from 'react';
// import { NavLink, useNavigate } from 'react-router-dom'

function NavBar({ setUser }) {
    // const navigate = useNavigate()
  
    function onClickHome() {
      navigate("/")
    }
    function onClickAuthor() {
        navigate("/authors")
    }
    function onClickPosts() {
        navigate("/posts")
    }
    function onClickComments() {
        navigate("/comments")
    }
    function onClickLogout() {
        localStorage.clear()
        setUser({})
        navigate("/login")
    }

    return (
        <div>
          <button onClick={onClickHome}>
            Home
          </button>
          <button onClick={onClickAuthor}>
            Author
          </button>
          <button onClick={onClickPosts}>
            Posts
          </button>
          <button onClick={onClickComments}>
            Comments
          </button>
          <button onClick={onClickLogout}>
            Logout
          </button>
        </div>
      );
    }
    
    export default NavBar;
    