import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LogBg from '../Assets/LogBg.png'

export default function Logging(){

    const Navigate = useNavigate()

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    const Login = () =>{
        if(userName === "rishichaary1903@gmail.com" && password === "Rishi"){
            Navigate("/", {state:{"userName":"Rishichaary","userType":"admin"}});
        }
        else if(userName === "dharshana@gmail.com" && password === "Rishi"){
            Navigate("/", {state:{"userName":"Dharshana","userType":"user"}});
        }
    }

    return(
        <div>
            <div className='flex justify-start p-10'>
                <button onClick={()=>{Navigate("/")}}>
                    <div className='flex items-center'>
                        <i class="fa-solid fa-angle-left text-3xl"></i>
                        <p className=' text-2xl'>Back</p>
                    </div>
                </button>
            </div>
            <div className="flex h-[80vh] px-20 items-center justify-evenly">
                <img src={LogBg}/>
                <div className='shadow-md w-[400px] h-[400px] p-[2rem] text-center rounded-md'>
                    <p className='text-2xl'>Welcome Back 👋</p>
                    <p className='text-md'>You have been missed</p>
                    <div className='my-[2rem]'>
                        <div className=' text-left m-2'>
                            <p className=' text-lg'>Username</p>
                            <input className=" border-2 border-green outline-none rounded-md w-full p-2" type='text' placeholder='example@gmail.com' onChange={(e)=>{setUserName(e.target.value)}}/>
                        </div>
                        <div className=' text-left m-2'>
                            <p className='text-lg'>Password</p>
                            <input className=" border-2 border-green outline-none rounded-md w-full p-2" type='password' placeholder='********' onChange={(e)=>{setPassword(e.target.value)}}/>
                        </div>
                        <button className='p-2 w-full bg-green rounded-md outline-none border-none' onClick={()=>{Login()}}>
                            <p className=' text-white'>LOGIN</p>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}