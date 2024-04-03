import CreateBlogForm from "../../Components/CreateBlogForm";

const CreateUMLBlogPage = ({author, avatar, blogPage}) => {
  
  const endpoint = "http://localhost:8000/umleditor_blogs"
  const blog = "UML Editor blog"
  return (
    <div class="grid justify-center">
            
      <CreateBlogForm endpoint={endpoint} blog={blog} author={author} avatar={avatar} blogPage={blogPage}/>
    </div>
  );
};

export default CreateUMLBlogPage;