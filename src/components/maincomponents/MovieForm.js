import React, { Component } from 'react';

class MovieForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: ''}
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
            <form onSubmit={this.handleSubmit}>
                <label>MOVIE FORM</label><br />
                <label>TITLE: <input placeholder="type in title" type="text" value={this.state.title} onChange={this.handleChange} /></label><br />
                <input className="submit-btn" type="submit" value="SUBMIT" />
            </form>
        );
    }
}

export default MovieForm;
