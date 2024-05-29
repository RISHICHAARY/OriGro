import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Axios from "axios";

import Navbar from "../Components/Navbar";
import combo from '../Assets/combo2.png';
import tomato from '../Assets/tomato.jpg';
import onion from '../Assets/Onion.jpg';

export default function Pricing(){

    const Location = useLocation();
    const Navigate = useNavigate();

    const [response,setResponse] = useState();

    const getPrice = () =>{
        Axios.post("http://127.0.0.1:5000/predictPrice", {"demand":100,"price":parseInt(Location.state.price)}).then((response)=>{
            console.log(response);
            setResponse(response.data);
        })
    }

    return(
        <div>
            <Navbar/>
            <div className="flex justify-center p-2 gap-[1rem] m-2 mx-[4rem]">
                {
                    (Location.state.image == "Onion.jpg")?
                        <img src={onion} className="w-[500px] shadow-md rounded-md"/>
                    :(Location.state.image == "tomato.jpg")?
                        <img src={tomato} className="w-[500px] shadow-md rounded-md"/>
                    :
                        <img src={combo} className="w-[500px] shadow-md rounded-md"/>
                }
                <div className="text-center">
                    <p className="text-[2rem]">{Location.state.product}</p>
                    <div className="my-2 text-left">
                        <p className="text-[0.9rem]">Quantity Left: 2.3Kg</p>
                        <p className="text-[0.9rem]">Current Price: {Location.state.price}</p>
                    </div>
                    {
                        (response != null)?
                            <div className="my-2 text-left">
                                <p className="text-[0.9rem]">Demand for last hour: {response.demand}</p>
                                <p className="text-[0.9rem]">Predicted Boost: {response.predictedBoostPercentage}</p>
                                <p className="text-[0.9rem]">Predicted Price: {response.predictedBestPrice}</p>
                            </div>
                        :<></>
                    }
                    <button className="p-2 bg-green w-fit rounded-md" onClick={()=>{getPrice()}}>
                        <p className="text-white text-[0.8rem]">Predict Price</p>
                    </button>
                </div>
            </div>
        </div>
    )
}