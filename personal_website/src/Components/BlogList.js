import BlogPost from "./BlogPost";

const BlogList = ({blogs, sorted, blogList, blogPage, isLoggedIn}) => {
    /*
        -- A blog list will contain a list of blogs 
        -- On the blog page, in admin mode, an admin will be able to create a post 
           to which then will be added to this list and displayed on the blog page
        -- All blog pages will have unique blog lists

    */
    

        /**
         * with a little bit of research, being able to sort my blog posts wasn't too difficult. It was simply looping through 
         * the available posts and comparing the dates of two blogs -- to sort descending I would compare on dateB to A and ascending would be A to B
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
                //mapping is a function that runs through the database -- it is akin to a for each loop as it lets me nickname each entry and from there, I can retrieve any data points from that entry.
                .map((blog) => (
                    
                    <BlogPost id={blog.id} avatar={blog.avatar} title={blog.title} author={blog.author} date={blog.date} body={blog.body} blogs={blogList} blogPage={blogPage} isLoggedIn={isLoggedIn}/>
                ))
            }
            </div>
        );
}
 
export default BlogList;