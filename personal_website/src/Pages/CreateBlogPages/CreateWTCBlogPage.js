
import CreateBlogForm from "../../Components/CreateBlogForm";
const CreateWTCBlogPage = ({author, avatar, blogPage}) => {

  const endpoint = "http://localhost:8000/wtc-blog"
  const blog = "WTC blog"
  
  return (
    <div class="grid justify-center">

      <CreateBlogForm endpoint={endpoint} blog={blog} author={author} avatar={avatar} blogPage={blogPage}/>
      
    </div>
  );
};

export default CreateWTCBlogPage;