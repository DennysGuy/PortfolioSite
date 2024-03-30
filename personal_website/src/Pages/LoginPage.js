import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';


const LoginPage = ({username, password, setUsername, setPassword, handleLogin, isLoggedIn}) => {
    /*
        A user can login if they have admin credentials, this will give them access to
        all admin features such as being able to make a post.
    */
    const navigate = useNavigate();

    const handleSubmit = (e) => {
            e.preventDefault();
            handleLogin(username, password);

    }

    return (
        <form onSubmit={handleSubmit}>
            <div class="flex justify-center">
                <div class="flex flex-col">
                    <h1 class=" italic flex font-bold text-2xl mt-14 ml-4"> Admin Sign In</h1>
                    <div class="flex flex-col max-w-[300px] mt-4 mb-4">
                        <h2>Username:</h2>
                        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} class="border border-black rounded-md text-black"/>
                        <h2 class="pt-4">Password:</h2>
                        <input type="password"id="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}class="border border-black rounded-md text-black" />
                        <Link to="" class="underline text-blue-600">request account</Link>
                    </div>
                    <div class="px-8">
                        <button class="bg-gray-300  text-xl px-10 py-1 rounded-xl transform hover:scale-110 transition ease-out duration-200 text-black">Login</button>
                    </div>
            </div>
        </div>

        </form>


    );
}
 
export default LoginPage;