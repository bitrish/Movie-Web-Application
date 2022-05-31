import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex',padding:'0.2', backgroundColor:'#925ac7'}}>
                <Link to="/" style={{textDecoration:'none',color:'white'}}><h1 style={{marginTop:'0.3rem',marginLeft:'1rem'}}>Movies App</h1></Link>
                <Link to="/fav" style={{textDecoration:'none',color:'white'}}><h2 style={{marginLeft:'2rem',marginTop:'0.8rem'}}>Favourites</h2></Link>
            </div>
        )
    }
}
