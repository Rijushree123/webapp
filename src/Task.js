import { useEffect } from 'react';
import './App.css';

function Task() {
       
    const submitForm=(e)=>{
        if( document.getElementById("myFile").files.length != 0 ){
            alert("The form was submitted"); 
        }
        else{
            alert("Please choose a file");
        }
        e.preventDefault();
    }
  return (
    <>
    <div className="parent">
        <div className="son">
        <h1>Work App</h1>
        <h2>Submit your work resume</h2>
        <form onSubmit={submitForm}>
            <input type='file' id="myFile" name="filename"></input>
            <input type='submit'></input>
        </form>
        </div>
    </div>
    </>
  );
}

export default Task;
