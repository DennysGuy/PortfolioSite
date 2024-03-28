import { Link } from "react-router-dom";

const LoginPage = ({handleLogin}) => {
    /*
        A user can login if they have admin credentials, this will give them access to
        all admin features such as being able to make a post.
    */
    return (
        <div class="flex justify-center">
            <div class="flex flex-col">
                <h1 class=" italic flex font-bold text-2xl mt-14 ml-4"> Admin Sign In</h1>
                <div class="flex flex-col max-w-[300px] mt-4 mb-4">
                    <h2>Username:</h2>
                    <input id="username" class="border border-black rounded-md"/>
                    <h2 class="pt-4">Password:</h2>
                    <input id="password" class="border border-black rounded-md" />
                    <Link to="" class="underline text-blue-600">request account</Link>
                </div>

                <div class="px-8">
                    <button onClick={handleLogin} class="bg-gray-300  text-xl px-10 py-1 rounded-xl transform hover:scale-110 transition ease-out duration-200">Login</button>
                </div>

            </div>

        </div>

    );
}
 
export default LoginPage;