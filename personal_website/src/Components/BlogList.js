import BlogPost from "./BlogPost";

const BlogList = ({blogs}) => {
    /*
        -- A blog list will contain a list of blogs 
        -- On the blog page, in admin mode, an admin will be able to create a post 
           to which then will be added to this list and displayed on the blog page
        -- All blog pages will have unique blog lists

    */
    
        return (  
            <div class="grid  justify-center my-4">
                {blogs.map((blog) => (
                   <BlogPost avatar={blog.avatar} title={blog.title} author={blog.author} date={blog.currentDate} body={blog.body} />
                ))}
            </div>
        );
}
 
export default BlogList;