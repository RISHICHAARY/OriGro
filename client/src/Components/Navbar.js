import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Geocode from "react-geocode";    

import logo from '../Assets/OriGro.png';

export default function Navbar(){

    const Navigate = useNavigate();
    const Location = useLocation();

    const [position, setPosition] = useState({ latitude: null, longitude: null });

    useEffect(() => {
        if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
            setPosition({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
            });
        });
        } else {
        console.log("Geolocation is not available in your browser.");
        }
    }, []);


    return(
        <div>
            <div className="w-full bg-green flex justify-evenly items-center">
                <img src={logo} className="w-[75px]"/>
                <div className="font-medium text-xl text-white flex gap-10 items-center">
                    <button onClick={()=>{
                        if(Location.state !== null){
                            Navigate("/",{state:{"userName":Location.state.userName,"userType":Location.state.userType}})
                        }
                        else{
                            Navigate("/")
                        }
                    }}>
                        <p>HOME</p>
                    </button>
                    <p>Dr.AI</p>
                </div>
                <div className="flex bg-white rounded-md p-2 w-[600px] h-fit  items-center">
                    <i className="fa-solid fa-magnifying-glass opacity-75"></i>
                    <input type='text' placeholder='Search...' className='px-1 w-[550px] outline-none border-none' />   
                </div>
                <div className=" flex items-center text-white gap-2">
                    <i className="fa-solid fa-location-dot text-xl"></i>
                    <div>
                        <p className=" text-xs p-0">Current Location</p>
                        <p className=" text-md p-0">SRM University</p>
                    </div>
                </div>
                <div className=" border-2 border-white rounded-full px-2 py-1">
                    <button onClick={()=>{Navigate("Loging")}} className="border-none outline-none">
                        {
                            (Location.state === null)?
                            <i className="fa-regular fa-user text-white text-xl"></i>
                            :
                            <p className='text-xl text-white'>{Location.state.userName}</p>
                        }
                    </button>
                </div>
            </div>
        </div>
    )
}