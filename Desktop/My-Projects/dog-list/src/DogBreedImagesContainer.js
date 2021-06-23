import React, { Component } from "react";
import { Link } from "react-router-dom";
import DogBreedImages from './DogBreedImages'
export default class DogBreedImagesContainer extends Component {
  state =  {
    image:null
  }
  componentDidMount(){
    const breed = this.props.match.params.breed;

    fetch(`https://dog.ceo/api/breed/${encodeURIComponent(breed)}/images`)
    .then(response=>response.json())
    .then(data=>{
    this.updatestate(data);
    })
  }
  updatestate(data){
    this.setState({
  image:data.message
})
  }
  render(){
    console.log("image", this.state.image);
	  const { breed } = this.props.match.params

    return (

      <div className="dog-breed-images">
        <DogBreedImages breed={breed} image={this.state.image}/>
      </div>
    )
  }
}
