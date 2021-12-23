import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomeScreen />} exact />
      </Routes>
    </Router>
  );
};

export default App;
