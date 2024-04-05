import Comments from "./Comments";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const BlogPost = ({id, avatar, title, author, date, body, blogs, blogPage, isLoggedIn}) => {
    const ep = blogs.slice(22);
    /*
        blog post layout:
         -- Top header will show user avatar, title of blog, posted by user on 'date' 
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
   const deleteEntry = () => {
    const blog = blogs + "/" + id;
    console.log(blog);
    fetch(blog, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(response=> {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then(data=> {
        console.log('Entry deleted successfully', data);
    }).catch(error => {
        console.error('Error deleting entry:', error);
    })

    setTimeout(() => {
        window.location.reload();
        
      }, 50);
   }
    
   /**
    * creating a blog post was partially straight forward. 
    * The most difficult tasks was giving capability for deleting and editing a specific post
    * 
    * **editing and deleting both require to grab an ID of the post
    *   
    *  editing was a bit of a  learning curve and it took a little while for me to figure out how to retrieve post information
    *  for obvious reasons, it didn't make sense to make an edit post for every single post as this is not a very scalable method
    *  so, the solution was to make the route link harbor dynamic parameters (this was achieved by placing a ':' infront of a parameter)
    *  This made it simple as passing the blog post's ID and the endpoint it belonged to the blog post card.
    *  Finally, I'll create a link button which the link will contain the endpoint and ID prop. The end point did have to first be trimmed
    *  as the database doesn't contain the website link (in my case local host link).
    * 
    *  another road block was displaying certain buttons if a user is logged in on a page or not. This required passing in a 'isLoggedIn' boolean
    *  several layers deep. I ran into a silly bug that was chalked up to a very minor yet easy to miss syntax error (which was using a lower case 
    *  when I initially put an uppercase) 
    * 
    */

    return (
            <div className="my-10 mx-8 text-black">
                <div className="flex flex-col shadow-xl rounded-xl overflow-hidden bg-zinc-300 md:w-[800px] h-[600px] max-h-[1000px] max-w-[1000px]">
                    <div className="flex bg-slate-400">
                        <img src={avatar} className="w-32 px-2 py-2 rounded-xl" />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl">{title}</h1>
                            <p>Posted by <span className="font-bold">{author} </span>on <span className="font-bold">{date}</span></p>
                            
                        </div>
                        
                    </div>
                    <p className="whitespace-pre-wrap py-8 px-8 max-w-[800px] h-[420px] max-h-[420px]">
                        {body}
                    </p>
                    <div className="flex justify-center">
                        {isLoggedIn && <Link to={`/edit/${ep}/${id}`} class="hover:underline pt-4 pr-6">edit</Link>} 
                        {isLoggedIn && <button onClick={deleteEntry}className="pt-4 hover:bold hover:underline">delete</button>}   
                    </div>

                </div>
            </div>
        
    );
}
 
export default BlogPost;
