import './App.css';
import { Router } from '@reach/router';
import Main from './views/Main';
import AddPet from './views/AddPet';
import Details from './views/Details';
import Edit from './views/Edit';
function App() {
  return (
    <div className="App">
      <Router>
        <Main path='/' />
        <AddPet path='/pets/new' />
        <Details path='/pets/:id' />
        <Edit path='/edit/:id' />
      </Router>
    </div>
  );
}

export default App;
