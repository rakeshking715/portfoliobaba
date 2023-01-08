import { AppContext } from "./AppContext";
import { useState } from "react";
import axios from 'axios'

const ApiContext = ({children}) => {
  const [isOpen, setIsOpen] = useState(true);
    const dashboard = () => setIsOpen(!isOpen);

    // weather 
    const [city, setCity] = useState("");
    const inputEvent = (event) => {
      setCity(event.target.value);
      event.preventDefault();
    }
      //  Weather 
      const [location, setLocation] = useState({});

      const weather = {
        method: 'GET',
        url: 'https://visual-crossing-weather.p.rapidapi.com/forecast',
        params: {
          aggregateHours: '24',
          location: { city },
          contentType: 'json',
          unitGroup: 'us',
          shortColumnNames: '0'
        },
        headers: {
          'X-RapidAPI-Key': '74d305cf90msh25f38910a34242dp1c852cjsn0f6b0f31473b',
          'X-RapidAPI-Host': 'visual-crossing-weather.p.rapidapi.com'
        }
      };
    
      const GetReport = () => {
        axios.request(weather)
          .then((response) => {
            setLocation(response.data.locations[`{\"city\":\"${city}\"}`])
            console.log(response.data.locations[`{\"city\":\"${city}\"}`].currentConditions.temp)
          })
          .catch(function (error) {
            console.log(error);
          });
      };
      // Weather 


  return (
   <AppContext.Provider value={{ isOpen, dashboard,  city, inputEvent, GetReport, location }}>
    {children}
   </AppContext.Provider>
  )
}

export default ApiContext