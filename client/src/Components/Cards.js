import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../Styles/cards.css";

import add1 from '../Assets/ads-1.png';
import add2 from '../Assets/DrAi.png';
import combo from '../Assets/combo2.png';
import tomato from '../Assets/tomato.jpg';
import onion from '../Assets/Onion.jpg';

const Home = () => {

  const Navigate = useNavigate()
  const Location = useLocation()

  console.log(Location.state);

  return (
    <div className="home">
      <div className="banners">
        <div className="top-banner1">
          <img src={add1} alt="banner1" />
        </div>
        <div className="top-banner2">
          <img src={add2} alt="banner2"></img>
        </div>
      </div>
      <div className="top-combos">
        {
          (Location.state !== null)?
            (Location.state.userType === 'admin')?
              <h1 className=" text-[2rem]">Your Products</h1>
            :
              <h1 className=" text-[2rem]">Top Products</h1>
          :
            <h1 className=" text-[2rem]">Top Products</h1>
        }
      </div>
      <div className=" flex justify-evenly p-4 overflow-x-auto">
        <div className="flex shadow-md gap-4 w-[400px] rounded-md p-2">
          <img src={combo} className="w-[200px] h-[120px]"/>
          <div className="flex flex-col justify-between">
            <p className="font-bold text-[1.2rem]">Combo od special</p>
            <p className="font-bold text-[1.2rem]">6 spices</p>
            <div className="flex items-center my-1">
              <i class="fa-solid fa-indian-rupee-sign"></i>
              <p>200 /Kg</p>
            </div>
            <button className="p-2 bg-green rounded-md w-fit" onClick={()=>{
              Navigate("/pricing", {state:{
                "userName":Location.state.userName,
                "userType":Location.state.userType,
                "image":"combo.png",
                "product":"Combo of special 6 spices",
                "price":200
              }})
            }}>
              {
                (Location.state !== null)?
                  (Location.state.userType === 'admin')?
                    <p className="text-white text-[0.8rem]">ChangePrice</p>
                  :
                    <p className="text-white text-[0.8rem]">View Product</p>
                :
                  <p className="text-white text-[0.8rem]">View Product</p>
              }
            </button>
          </div>
        </div>

        <div className="flex shadow-md gap-4 w-[400px] rounded-md p-2">
          <img src={onion} className="w-[200px] h-[120px]"/>
          <div className="flex flex-col justify-between">
            <p className="font-bold text-[1.2rem]">Fresh Onion</p>
            <div className="flex items-center my-1">
              <i class="fa-solid fa-indian-rupee-sign"></i>
              <p>33 /Kg</p>
            </div>
            <button className="p-2 bg-green rounded-md w-fit" onClick={()=>{
              Navigate("/pricing", {state:{
                "userName":Location.state.userName,
                "userType":Location.state.userType,
                "image":"Onion.jpg",
                "product":"Fresh Onoin",
                "price":33
              }})}}>
              {
                (Location.state !== null)?
                  (Location.state.userType === 'admin')?
                    <p className="text-white text-[0.8rem]">ChangePrice</p>
                  :
                    <p className="text-white text-[0.8rem]">View Product</p>
                :
                  <p className="text-white text-[0.8rem]">View Product</p>
              }
            </button>
          </div>
        </div>

        <div className="flex shadow-md gap-4 w-[400px] rounded-md p-2">
          <img src={tomato} className="w-[200px] h-[120px]"/>
          <div className="flex flex-col justify-between">
            <p className="font-bold text-[1.2rem]">Fresh Tomato</p>
            <div className="flex items-center my-1">
              <i class="fa-solid fa-indian-rupee-sign"></i>
              <p>10 /Kg</p>
            </div>
            <button className="p-2 bg-green rounded-md w-fit" onClick={()=>{
              Navigate("/pricing", {state:{
                "userName":Location.state.userName,
                "userType":Location.state.userType,
                "image":"tomato.jpg",
                "product":"Fresh Tomato",
                "price":10
              }})}}>
              {
                (Location.state !== null)?
                  (Location.state.userType === 'admin')?
                    <p className="text-white text-[0.8rem]">ChangePrice</p>
                  :
                    <p className="text-white text-[0.8rem]">View Product</p>
                :
                  <p className="text-white text-[0.8rem]">View Product</p>
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
