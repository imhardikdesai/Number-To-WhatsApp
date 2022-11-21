import './App.css';
import NavBar from './Components/NavBar/NavBar';
import Form from './Components/Form/Form';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="container my-5 d-flex justify-content-center">
        <Form />
      </div>
      <Footer />
    </div>
  );
}

export default App;
