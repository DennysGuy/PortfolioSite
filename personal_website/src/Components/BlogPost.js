import Comments from "./Comments";
import { Link } from "react-router-dom";
const BlogPost = () => {
    
    const currentDate = new Date();
    /*
        blog post layout:
         -- Top header will show username picture, title of blog, posted by me on 'date' 
         -- conent of blog
         -- comment/likes section (use external service? create a user login for anyone? -- look into disqus)
         -- ingredients
                -- login system
                -- multiple people can make a blog post on any given project as long as they have a login
                -- a blog post can (and preferred to) be made on site and not just through code
                    -- user can include embed pictures and videos (need a method to allow user to do this)
                    -- user can have their own profile picture
                    -- user needs their own unique pseudoname (username) account settings?
                    -- user needs their own unique password
    */
    
    return (
        
            <div>
                <h1 className="page-header">UML Editor Blog Page</h1>
            
                <h1 className="flex underline font-bold text-4xl my-4 justify-center"> Blog Posts</h1>
                <div className="flex flex-col rounded-xl overflow-hidden bg-zinc-300 max-w-[800px]">
                    <div className="flex bg-slate-400">
                        <img src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg" alt="profile-pic" className="h-24 border border-black mx-4" />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl">Bug Fixes for Positioning Boxes after refresh and Relationship Lines</h1>
                            <p>Posted by DennysGuy on {currentDate.toLocaleDateString()}</p>
                        </div>
                    </div>
                    <p className="py-8 px-8 max-w-[800px]">
                        Hello Everyone! <br /> <br />
                        Today, the team and I worked on some quick bug fixes. You can check out the github page for the changes in code. <br /> <br /> 
                        fixes include: <br />
                        - consistency of positioning of class boxes when updates have been made<br />
                        - relationship lines can now be established again! <br />
                        <br />
                        Thanks for reading, <br />
                        Matt
                    </p>
                </div>
            </div>
        
    );
}
 
export default BlogPost;
