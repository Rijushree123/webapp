import logo from './logo.svg';
import './App.css';
import { useNavigate } from 'react-router';

function Home() {
  const navigate= useNavigate()
  const handleChange = (event) => {
    const value = event.target.value
    console.log(value);
    navigate('/task');
  }
  return (
    <>
    <div className="parent">
    <div className="son">
      <h1>Welcome to Work App</h1>
      <div className="empname">
          <h2>Employee Name</h2>
          <select>
              <option>Riki Paul</option>
              <option>Anshuman Tyagi</option>
              <option>Aman Kaur</option>
              <option>Ritika Das</option>
              <option>Subhajit Paul</option>
              <option>Arju Sinha</option>
              <option>Rijushree Guha</option>
              <option>Monami Sen</option>
              <option>Alok Dutt</option>
              <option>John Andrew</option>
          </select>
      </div>
      <div class="work">
          <h2>Select Work/Task</h2>
          <select id="myButton" onChange={handleChange}>
              <option>Frontend Devlopement</option>
              <option>Backend Devlopement</option>
              <option>Web Design</option>
          </select>
      </div>
      </div>
      </div>
    </>
  );
}

export default Home;
