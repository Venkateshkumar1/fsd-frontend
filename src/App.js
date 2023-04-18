
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    
     
   
    <div className="App">
       <div className='bg'>
      <header className="App-header">
      {/* <div style={{ 
      backgroundImage: `url(${logo})` ,
      backgroundRepeat: "no-repeat"
      
    }}> */}
   
        <p>
          QUERY RESOLVING
        </p><br/>
       <a
          className="App-link"
          href="http://localhost:3000/StudentLogin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Student Login
        </a><br/><br/>
       <a
          className="App-link"
          href="http://localhost:3000/StudentRegister"
          target="_blank"
          rel="noopener noreferrer"
        >
          Student Registeration
        </a><br/><br/>
        <a
          className="App-link"
          href="http://localhost:3000/TeacherLogin"
          target="_blank"
          rel="noopener noreferrer"
        >
          Teacher Login
        </a><br/><br/>
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
    </div>
    
  );
}

export default App;
