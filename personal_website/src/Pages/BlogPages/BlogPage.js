import BlogPost from "../../Components/BlogPost";
import BlogList from "../../Components/BlogList";
import useFetch from "../../Components/useFetch";
import { Link } from "react-router-dom";
const BlogPage = (props) => {
    const {data: blogs, isPending, isEmpty, error} = useFetch(props.blogList);
    
    return ( 
        <div>
            <h1 className="page-header">{props.pageHeader}</h1>
            <h1 className="flex underline font-bold text-4xl my-4 justify-center"> Blog Posts</h1>
            <div class="mt-8 mx-8">
                {props.isLoggedin && <Link to={props.createBlogPage} class="px-1 py-1 hover:bg-slate-600 hover:text-white text-slate-700 text-lg rounded-xl border border-4  border-slate-500 hover:border-gray-300">create post</Link>}
            </div>
            <div class="mt-6">
                <div class="flex flex-col items-center">
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading Projects...</div>}
                    {isEmpty && <h1 className=" font-bold">There is currently no content here to display...</h1>}
                    {blogs && <BlogList blogs={blogs} />}
                </div>
            </div>

        </div>


     );
}
 
export default BlogPage;