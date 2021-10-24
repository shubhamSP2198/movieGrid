import React, { Component } from 'react'

export default class MovieCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
             
        }
    }
    
    render() {
        return (
            <div className="movie-card">
                <img src={this.props.movieDetail.Poster} alt="poster"/>
                <h5 className="title">{this.props.movieDetail.Title}</h5>
            </div>
        )
    }
}
