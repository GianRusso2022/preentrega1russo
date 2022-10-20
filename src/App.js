import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import AppContainer from "./components/AppContainer";

function App() {
  return (
    <div classNameName="App">
     <NavBar/>
     <main className="content">
      <AppContainer saludo="Bienvenidos!!"/>
     </main>
    </div>
  );
}

export default App;
