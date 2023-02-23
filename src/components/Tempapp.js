import React,{useState,useEffect} from "react";
import "./css/style.css";
const Tempapp=()=>{
    const [city,setcity]=useState(null);
    const [search,setsearch]=useState("Kolkata");

    useEffect(() => {
        const fetchApi=async()=>{
            const url=`https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=4bd197accd799a0c37c7a8c55889514a`
            const response=await fetch(url);
            //console.log(response);
            const resJson=await response.json();
            setcity(resJson.main);
        }
        fetchApi();
    },[search])
    return(
        <>
        <div className="box">
            <div className="inputData">
                <input type="search" value={search} className="inputField" 
                onChange={(event)=>{
                    setsearch(event.target.value)

                }}
                />
            </div>

            {!city ? (
                <p className="errorMsg">No Data Found</p>
            ):( <>
            <div className="info">
                <h2 className="location">
                <i className="fas fa-street-view">{search}</i>
                </h2>
                <h1 className="temp">{city.temp}°Cel</h1>
                <h3 className="tempmin_max">
                    Min : {city.temp_min}°Cel | Max : {city.temp_max}°Cel
                </h3>
            </div>
            <div className="wave -one"></div>
            <div className="wave -twoe"></div>
            <div className="wave -three"></div>
            </>)

            }
            

        </div>

        </>
    )
}
export default Tempapp;