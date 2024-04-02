import Comments from "./Comments";
import { Link } from "react-router-dom";
const BlogPost = ({id, avatar, title, author, date, body, blogs, blogPage, isLoggedIn}) => {
    
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
            throw new Error('Network response was not ok')
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
    
    return (
            <div className="my-10 mx-8 text-black">
                <div className="flex flex-col shadow-xl rounded-xl overflow-hidden bg-zinc-300 md:w-[800px] h-[600px] max-h-[1000px] max-w-[1000px]">
                    <div className="flex bg-slate-400">
                        <img src={avatar} className="w-32 px-2 py-2 rounded-xl" />
                        <div className="flex flex-col">
                            <h1 className="font-bold text-xl">{title}</h1>
                            <p>Posted by <span className="font-bold">{author} </span>on <span className="font-bold">{date}</span></p>
                            
                        </div>
                        {isLoggedIn && <Link to="" class="hover:underline pl-40">edit post</Link>}
                    </div>
                    <p className="whitespace-pre-wrap py-8 px-8 max-w-[800px] h-[420px] max-h-[420px]">
                        {body}
                    </p>
                    {isLoggedIn && <button onClick={deleteEntry}className="pt-4 transform hover:bold hover:scale-110 hover:underline transition ease-out duration-100">delete post</button>}
                    
                </div>
            </div>
        
    );
}
 
export default BlogPost;
