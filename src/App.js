import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          QUERY RESOLVING
        </p>
        <a
          className="App-link"
          href="http://localhost:3000/StudentLogin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Student Login
        </a>
        <a
          className="App-link"
          href="http://localhost:3000/StudentRegister"
          target="_blank"
          rel="noopener noreferrer"
        >
          Student Registeration
        </a>
        <a
          className="App-link"
          href="http://localhost:3000/TeacherLogin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Teacher Login
        </a>
        <a
          className="App-link"
          href="http://localhost:3000/TeacherRegister"
          target="_blank"
          rel="noopener noreferrer"
        >
          Teacher Registeration
        </a>
      </header>
    </div>
  );
}

export default App;
