import React, { Component } from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';

export default class MovieGrid extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             movieArr: []
        }
    }

    async componentDidMount(){
        let response = await axios.get('https://www.omdbapi.com/?apikey=45f0782a&s=war');
        this.setState({
            movieArr: response.data.Search
        })
    }
    
    render() {

        return (
            <div className="movie-grid">
                {this.state.movieArr.length ? this.state.movieArr.map((details) => {
                    return <MovieCard movieDetail ={details}/>
                }) : ''}
            </div>
        )
    }
}
