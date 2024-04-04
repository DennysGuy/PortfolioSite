import { useEffect, useState } from "react";
import CreateBlogForm from "../Components/CreateBlogForm";
import { useNavigate, useParams } from "react-router-dom";

const EditBlogPostPage = () => {
    const {endpoint, id} = useParams();

    const log = `http://localhost:8000/wtc_blogs/${id}`;

    const[title, setTitle] = useState('')
    const[body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [avatar, setAvatar] = useState('');
    const [date, setDate] = useState('');
    const navigate = useNavigate();
    
    useEffect(()=> {
        fetch(log)
        .then(res => {
            console.log(res);
            if(!res.ok) {
                throw Error('could not fetch the data for the resource');
            }
            return res.json();})
            .then(data => {
                setTitle(data.title);
                setBody(data.body);
                setAuthor(data.author);
                setAvatar(data.avatar);
                setDate(data.date);

            }).catch(error => {
                console.log(error.message);
            })
    },[log]);

    const handleSubmit =(e)=> {
        e.preventDefault();
        const update = {title, body, author, avatar, date}
        fetch(log, {
            method: 'PUT',
            header: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(update)
        }).then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            console.log('Data updated successfully:', data);
          })
          .catch(error => {
            console.error('There was a problem updating the data:', error);
          });

          navigate(-1);
          
          setTimeout(() => {
            window.location.reload();
            
          }, 100);

    }
    
    return ( 
        <div className="grid justify-center">
        <form onSubmit={handleSubmit}>
          
          <div class="grid my-8">
              <label class="italic font-bold text-2xl py-6">Title:</label>
              <input 
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              class="text-black border border-black w-[600px] rounded-lg"> 
              </input>
              
              <label class="italic font-bold text-2xl py-6">Body:</label>
              <textarea
              required
              value={body}
              onChange={(e) => setBody(e.target.value)}   
              class="text-black border border-black h-96 w-[800px] max-w-[800px] rounded-lg resize-none">
              </textarea>
              
          </div>
  
          <div class="flex justify-center">
            <button class="mb-8 border border-black px-10 py-1 rounded-lg">submit</button>
          </div>
        </form>
      </div>
     );
}
 
export default EditBlogPostPage;