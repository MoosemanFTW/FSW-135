import { useContext } from 'react';
import Auth from './components/Auth';
import './App.css';
import { UserContext } from './context/UserProvider';

function App() {

  const { token } = useContext(UserContext)

  return (
    <div>
      <Auth />
    </div>
  );
}

export default App;
