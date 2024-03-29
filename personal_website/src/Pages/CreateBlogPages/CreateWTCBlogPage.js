
import CreateBlogForm from "../../Components/CreateBlogForm";
const CreateWTCBlogPage = () => {

  const endpoint = "http://localhost:8000/wtc-blog"
  const blog = "WTC blog"
  
  return (
    <div class="grid justify-center">
      <CreateBlogForm endpoint={endpoint} blog={blog}/>
    </div>
  );
};

export default CreateWTCBlogPage;