import logo from './logo.svg';
import './App.css';
import ListOfPeople from './components/ListOfPeople';
import Menu from './components/Menu';

function App() {
  return (
    <div className="container">
      <Menu />
      <ListOfPeople />
    </div>
  );
}

export default App;
