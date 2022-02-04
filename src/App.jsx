import './App.css';
import db from './firebase.config';
import React,{useState,useEffect} from 'react';

function App() {
  const [villes,setVilles]=useState([])
  const fetchVilles=async()=>{
    const response=db.collection('villes');
    const data=await response.get();
    data.docs.forEach(item=>{
     setVilles([...villes,item.data()])
    })
  }
  useEffect(() => {
    fetchVilles();
  }, [])
  return (
    <div className="App">
      {
        villes && villes.map(ville=>{
          return(
            <div className="ville-container">
              <h4>{ville}</h4>
              <p>{JSON.stringify(ville)}</p>
            </div>
          )
        })
      }
    </div>
  );
}

export default App;