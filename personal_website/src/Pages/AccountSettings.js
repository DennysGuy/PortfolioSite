import { useState } from "react";

const AccountPage = ({username, password, avatar, email}) => {

    const [passwordVisible, setPasswordVisiblity] = useState(false);

    const handlePasswordVisibility = () => {
        setPasswordVisiblity(!passwordVisible);
    }

    const generateHiddenPassword = () => {
        let hiddenPassword = "";
        for(let i=0; i < password.length; i++) {
            hiddenPassword += "*";
        }
        return hiddenPassword
    }

    return (

        <div className="">
            <h1 className="flex justify-center underline text-4xl font bold my-10 ">Account Settings</h1>
            <div className="flex justify-center px-14">
                <div className="flex flex-col">
                    <div className="px-8 py-8">
                        <div className="flex space-x-40 pb-12 ">
                            <h1 className="text-2xl font-bold">Avatar</h1>
                            <button className="text-blue-500 hover:underline">change</button>
                        </div>
                            
                        <img src={avatar} alt="avatar" className="flex justify-center h-52 w-52 rounded-xl" />
                    </div>

                    <div className="px-8 my-12">
                        <div className="flex space-x-44 pb-8 ">
                            <h1 className="text-2xl font-bold my-12">Email</h1>
                            <button className="text-blue-500 hover:underline">change</button>
                        </div>
                        <span className="flex justify-center pb-8">{email}</span>
                    </div>

                    <div className="px-8 my-12">
                        <div className="flex space-x-32 pb-8 ">
                            <h1 className="text-2xl font-bold my-12">Username</h1>
                            <button className="text-blue-500 hover:underline">change</button>
                        </div>
                        <span className="flex justify-center pb-8">{username}</span>
                    </div>

                    <div className="px-8 my-4">
                        
                        <div className="flex space-x-32 pb-8 ">
                            <h1 className="text-2xl font-bold my-12">Password</h1>
                            <button className="text-blue-500 hover:underline">change</button>
                        </div>
                        <div className="flex space-x-48 pb-4">
                            {passwordVisible && <span className="">{password}</span>}
                            {!passwordVisible && <span className="">{generateHiddenPassword()}</span>}
                            <button onClick={handlePasswordVisibility} className="text-blue-500 hover:underline">{passwordVisible ? "hide" : "show"}</button>
                            
                        </div>
                    
                       
                    </div>

                </div>
            </div>
        </div>


    );
}
 
export default AccountPage;