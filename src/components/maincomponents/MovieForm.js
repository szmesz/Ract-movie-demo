import React, { Component } from 'react';

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            release_date: '',
            genre: '',
            overview: '',
            runtime: '' 
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({title: event.target.value});
      }

    handleSubmit(event) {
        alert('movie "' + this.state.title + '" was submitted.');
        event.preventDefault();
    } 
    
    render() {
        return(
            <form className="film-form" onSubmit={this.handleSubmit}>
                <label className="form-title">ADD MOVIE</label><br />
                <label className="form-label">TITLE: <input class="form-input" placeholder="type in title" type="text" value={this.state.title} onChange={this.handleChange} /></label><br />
                <label className="form-label">RELEASE DATE: <input class="form-input" placeholder="type in title" type="date" value={this.state.release_date} onChange={this.handleChange} /></label><br />
                <label className="form-label">GENRE: <input className="form-input" placeholder="type in genre" type="text" value={this.state.genre} onChange={this.handleChange} /></label><br />
                <label className="form-label">OVERVIEW: <input className="form-input" placeholder="type in overview" type="text" value={this.state.overview} onChange={this.handleChange} /></label><br />
                <label className="form-label">RUNTIME: <input className="form-input" placeholder="type in runtime" type="text" value={this.state.runtime} onChange={this.handleChange} /></label><br />
                <input className="submit-btn" type="submit" value="SUBMIT" />
            </form>
        );
    }
}

export default MovieForm;
