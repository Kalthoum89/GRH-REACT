import './App.css';
import Navbar from './components/Navbar';
import AllCandidat from './views/AllCandidat';

function App() {
  return (
    <div className="content">
      <Navbar />
      <div className='container'>
      <AllCandidat />
    </div>
     </div >
  );
}

export default App;
