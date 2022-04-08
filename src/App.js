import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import About from './pages/About';
import Quizes from './pages/Quizes';
import AddQuiz from './AddQuiz';
import Register from './pages/Register';
import Protected from './Protected';
import Answer from './Answer';
import Quiz from './Quiz';
import { Route, Routes } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<Protected Cmp={About}/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/quizes" element={<Protected Cmp={Quizes}/>} />
        <Route exact path="/add" element={<Protected Cmp={AddQuiz}/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route path="/quizes/:id" element={<Protected Cmp={Quiz}/>} />
        {/* <Route path="/quizes/:id/:id" element={<Protected Cmp={Answer}/>} /> */}

        <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
      </Routes>
      </div>
  );
}

export default App;

// {"key":"a7f4c9f234c5ff2e9b01f2160a67ce0e0c5ba3754ab9d4a97170cee764c218ef","secret":"96f1f7de1b1ada7b7de50e3f72be3291bfb92afe161160e02fdb5d4ff76b6ca5"}
