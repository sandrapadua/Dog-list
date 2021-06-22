import React, { Component } from "react";
import DogsList from "./Doglist";
export default class DogsListContainer extends Component {
    state = {
        dogBreeds: null
      };
componentDidMount(){
    fetch("https://dog.ceo/api/breeds/list/all")
    .then(res => res.json())
    .then(data => {
       const breeds = Object.keys(data.message);

      this.updateBreeds(breeds);

    })
    .catch(console.error);
}

updateBreeds(breeds) {
  this.setState({
    dogBreeds: breeds
  })

}
  render() {
    return (
      <div className="dogs-list">
       <DogsList dogBreeds ={this.state.dogBreeds}/>
      </div>
    );
  }
}