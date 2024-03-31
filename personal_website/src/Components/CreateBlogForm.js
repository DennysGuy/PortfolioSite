import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CreateBlogForm = (props) => {
  const[title, setTitle] = useState('');
  const[body, setBody] = useState('');
  const author = props.author;
  const avatar = props.avatar;
  const date = new Date();
  const navigate = useNavigate();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = {title, body, author, avatar, date}
    
    fetch(props.endpoint, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(blog)
    }).then(console.log("blog posted successfully"))

   navigate(props.blogPage);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div class="grid my-8">
            <h1>{props.blogPage}</h1>
            <label class="italic font-bold text-2xl py-6">Title:</label>
            <input 
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            type="text"
            class="text-black border border-black w-96 rounded-lg"> 
            </input>
            
            <h1 className="mt-6 font-bold text-xl">adding to: {props.blog} </h1>

            <label class="italic font-bold text-2xl py-6">Body:</label>
            <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}   
            class="text-black border border-black h-96 max-w-[1000px] rounded-lg resize-none">
            </textarea>
            
        </div>

        <div class="flex justify-center">
          <button class="mb-8 border border-black px-10 py-1 rounded-lg">submit</button>
        </div>
      </form>
    </div>
    


  );
};

export default CreateBlogForm;