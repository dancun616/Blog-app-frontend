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
    function onClickCategory() {
        navigate("/category")
    }