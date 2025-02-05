import logo from './logo.svg';
import './App.css';
import { store } from './actions/store';
import { Provider } from 'react-redux';
import People from './components/People';
import { Container } from '@mui/material';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="lg">
        <People />
      </Container>
    </Provider>
  );
}

export default App;
