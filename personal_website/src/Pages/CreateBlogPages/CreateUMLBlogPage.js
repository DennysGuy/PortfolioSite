import CreateBlogForm from "../../Components/CreateBlogForm";

const CreateUMLBlogPage = () => {
  
  const endpoint = "http://localhost:8000/umleditor-blog"
  const blog = "UML Editor blog"
  return (
    <div class="grid justify-center">
      <CreateBlogForm endpoint={endpoint} blog={blog}/>
    </div>
  );
};

export default CreateUMLBlogPage;