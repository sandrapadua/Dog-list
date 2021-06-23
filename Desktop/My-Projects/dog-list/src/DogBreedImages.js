import React, { Component } from "react";

export default class DogBreeds extends Component {
  
    render(){
        const { breed, image } = this.props

        return(
            <div className="dogs-list">
            <h1>Dogs image</h1>
            This page will show images of the { breed } breed
            <div>
    	  { image && image.map(url => <img src={ url } alt="Dog" />) }
  	      { !image && 'Loading...' }
	    </div>
            </div>
        )
    }
}