import React ,{useEffect,useState} from 'react';
import "./css/style.css";

const Tempapp = () => {

    const [city, setCity] = useState("null");
    const [search, setSearch] = useState("");


    useEffect(() => {
        

        const fetchApi = async () => {
            const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1e3dd4b9ff5cc358b21f3a90ecc3083d`
            const response   = await fetch(url);
            const resJson = await response.json();
            setCity(resJson.main);
        }

        fetchApi();
    },[search] )

    return (
        <>
        <div className = "box">
            <div className = "inputData">
                <input type = "search" value = {search} className = "inputField" onChange = {(event) => {setSearch(event.target.value)}}/>
            </div>
            
            {!city ? (
                <p className = "errorMsg"> No Data Found </p>
            ) : (
                
                <div className = "info">
                <h2 className = "location">
                <i className="fas fa-street-view"></i>{search}
                </h2>

                <h1 className = "temp">
                    {city.temp}°Cel
                </h1>

                <h3 className = "tempmin_max">
                {city.temp_min}°Cel :: {city.temp_max}°Cel
                </h3>

            <div className = "wave -one"></div>
            <div className = "wave -two"></div>
            <div className = "wave -three"></div>

            </div>
            )}
        

            
        </div>

        </>
    )
}

export default Tempapp;
