import axios from 'axios';
import React, { Component } from 'react'

export default class Banner extends Component {
    constructor() {
        super();
        this.state = {
            currPage: 1,
            movies: [],
        }
    }
    async componentDidMount() {
        const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1cc9ebff269a404baf930a1cff8d85cb&language=en-US&page=${this.state.currPage}`);
        let data = res.data
        this.setState({
            movies: [...data.results]
        })
    }
    render() {
        return (
            <>
            {   this.state.movies[0]==undefined ?
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>:
                <div className="card banner-card" id='Go-to-Banner'>
                <img src={`https://image.tmdb.org/t/p/original${this.state.movies[0].backdrop_path}`}   alt={this.state.movies[0].title} className="card-img-top banner-img"/>
        
                    <h1 className="card-title banner-title">{this.state.movies[0].original_title}</h1>
                    <p class="card-text banner-text">{this.state.movies[0].overview}</p>
                </div>
            }
            </>
        )
    }
}
