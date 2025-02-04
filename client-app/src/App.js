import logo from './logo.svg';
import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import { People } from './components/People'


function App() {
  return (
    <Provider store={store}>
        <People />
    </Provider>
  );
}

export default App;
