import './App.css';
import {
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';

import Books from './components/Books/Books';
import Categories from './components/Categories';
import Navbar from './components/Navbar/Navbar';
import store from './redux/configureStore';
// import UserContainer from './components/UserContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <UserContainer /> */}
        <Navbar />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="*" element={<Books />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
