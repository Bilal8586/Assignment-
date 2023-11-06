import axios from "axios";
import React, { useEffect, useState } from "react";

const LocationInfo = ({ postalCode,country }) => {
    const [locationInfo, setLocationInfo] = useState(null)
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const getData = async ()=>{
      setLoading(true);
      try {
        const res = await axios.get(`http://api.zippopotam.us/${country}/${postalCode}`)
        setLocationInfo(res.data);
       setLoading(false);
       setError(null)
      } catch (error) {
        console.log(error)
        setLoading(false);
        setError(error.message);
      }
     
    }
    useEffect(() => {
     
       if(postalCode){
        getData()
       }
      
    }, [postalCode]);
  
    if (loading) return <div>Loading...</div>;
    if (error) return <div className="bg-red-600 mt-10 text-white">Error: {error}</div>;
    if (!locationInfo) return null;
  
    return (
      <div className="flex flex-col justify-center items-center">
        <div className="">
        <h2>Location Information</h2>
        <p>Country: {locationInfo?.country}</p>
        <p>State: {locationInfo?.places[0].state}</p>
        </div>
      <div>
       {
        locationInfo?.places.map((place,i)=> {
            return (
               <div key={i} className="flex">
                <h2>Place name:</h2>
                <h2>{place["place name"]}</h2>
               </div>
            )
        })
       }
       </div>
       <button onClick={()=>setLocationInfo('')} className="bg-blue-500 text-white mt-4 p-2 text-xl hover:text-black">Clear data</button>
      </div>
    );
  };

  export default LocationInfo