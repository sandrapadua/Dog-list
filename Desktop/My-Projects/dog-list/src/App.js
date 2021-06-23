import './App.css';
import { Route } from "react-router-dom";

import DoglistContainer from './DoglistContainer'
import DogBreedImagesContainer from './DogBreedImagesContainer';
function App() {
  return (
    <div className="App">
     <Route exact path="/" component={DoglistContainer} />
     <Route path="/dog-breeds/:breed" component={DogBreedImagesContainer} />

    </div>
  );
}

export default App;
