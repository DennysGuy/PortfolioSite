import Comments from "./Comments";
import { Link } from "react-router-dom";
const BlogPost = (props) => {
    
    /*
        blog post layout:
         -- Top header will show username avatar, title of blog, posted by me on 'date' 
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
        
            <div className="my-10 mx-8 text-black">
                <div className="flex flex-col rounded-xl overflow-hidden bg-zinc-300 max-w-[800px]">
                    <div className="flex bg-slate-400">
                        <img src={props.avatar} className="w-32 px-2 py-2 rounded-xl" />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl">{props.title}</h1>
                            <p>Posted by <span className="font-bold">{props.author} </span>on <span className="font-bold">{props.date}</span></p>
                        </div>
                    </div>
                    <p className="whitespace-pre-wrap py-8 px-8 max-w-[800px]">
                        {props.body}
                    </p>
                </div>
            </div>
        
    );
}
 
export default BlogPost;
