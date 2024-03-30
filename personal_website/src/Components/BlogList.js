import BlogPost from "./BlogPost";

const BlogList = ({blogs, sorted}) => {
    /*
        -- A blog list will contain a list of blogs 
        -- On the blog page, in admin mode, an admin will be able to create a post 
           to which then will be added to this list and displayed on the blog page
        -- All blog pages will have unique blog lists

    */
    

        return (  
            <div class="grid  justify-center my-4">
            {blogs
                .slice() // Create a copy of the array to avoid mutating the original array
                .sort((a, b) => {
                    const dateA = new Date(a.date);
                    const dateB = new Date(b.date);
        
                    //sorts descending if false, sorts ascending if true
                    if (sorted == false)
                        return dateB-dateA;
                    else
                        return dateA-dateB;
                })
                .map((blog) => (
                    
                    <BlogPost key={blog.id} avatar={blog.avatar} title={blog.title} author={blog.author} date={blog.date} body={blog.body} />
                ))
            }
            </div>
        );
}
 
export default BlogList;