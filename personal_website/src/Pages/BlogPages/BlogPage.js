import BlogPost from "../../Components/BlogPost";
import BlogList from "../../Components/BlogList";
import useFetch from "../../Components/useFetch";
import { Link } from "react-router-dom";
import { useState } from "react";
const BlogPage = (props) => {
    const {data: blogs, isPending, isEmpty, error} = useFetch(props.blogList);
    
    const [sort, setSortation] = useState(false);

    const handleSortation = () => {
        if (sort == false){
            setSortation(true);
        } else {
            setSortation(false);
        }
    }

    return ( 
        <div>
            <h1 className="page-header">{props.pageHeader}</h1>
            <h1 className="flex underline font-bold text-4xl my-4 justify-center"> Dev Logs</h1>
            <div class="flex justify-between mt-8 mx-8">
                {props.isLoggedin && <Link to={props.createBlogPage} class="px-1 py-1 hover:bg-slate-600 text-white text-lg rounded-xl border border-4  border-slate-500 hover:border-gray-300">create post</Link>}
                <button className="font-bold hover:underline" onClick={handleSortation}>sorted by {sort ? 'oldest first' : 'newest first' } </button>
            </div>
            <div class="mt-6">
                <div class="flex flex-col items-center">
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading Projects...</div>}
                    {isEmpty && <h1 className=" font-bold">There is currently no content here to display...</h1>}
                    {blogs && <BlogList blogs={blogs} sorted={sort} />}
                </div>
            </div>

        </div>


     );
}
 
export default BlogPage;