import BlogPost from "../Components/BlogPost";
import { Link } from "react-router-dom";
const BlogPage = ({isLoggedin}) => {
    return ( 
        <div>
            <div class="mt-8 mx-8">
                {isLoggedin && <Link to="" class="px-1 py-1 hover:bg-slate-600 hover:text-white text-slate-700 text-lg rounded-xl border border-4  border-slate-500 hover:border-gray-300">create post</Link>}
            </div>
            <div class="mt-6">
                <div class="flex flex-col items-center">
                    <BlogPost />
                </div>
            </div>

        </div>


     );
}
 
export default BlogPage;