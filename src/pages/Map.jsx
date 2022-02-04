import React, { useState, useEffect } from 'react';
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { Map as GMap, InfoWindow, Marker, GoogleApiWrapper, GoogleAPI } from "google-maps-react";

const Map = ({google}) => {
    const s = (a) => JSON.stringify(a)

    const [villes, setVilles] = useState([]);
  const villesCollectionRef = collection(db, "villes");
  const getVilles = async () => {
    const data = await getDocs(villesCollectionRef);
    setVilles(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {

    getVilles();
  }, []);
    return (
        <>
        
        <ul>
            {villes && villes.map((ville, k) => (
                // <li key={k}>{s(ville)}</li>
                <li key={k}>{ville.id} [{ville.lat} , {ville.lng}]</li>
            ))}
        </ul>
        <GMap style={{}} google={google} zoom={8} initialCenter={{lat: 33.5731104, lng: -7.5898434}}>
        {villes.map((ville, k) => (
                <Marker key={k}
    title={'The marker`s title will appear as a tooltip.'}
    name={ville.id}
    position={{lat: ville.lat, lng: ville.lng}} />
            ))}
        
        </GMap>
        </>

    )
}

export default  GoogleApiWrapper({
    apiKey: "AIzaSyAIASIuKkCZjrsg7WgGDTNtQhVR8O87U6M",
    v: "3.30"
  })(Map);;
